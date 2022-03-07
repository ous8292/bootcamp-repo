//CRUD
const baseUrl = "http://localhost:3002"
// How to Read our Data
$(document).ready(function(){
    //get all data from DB
    let route = "todos"
    let endpoint = `${baseUrl}/${route}`
    //using fetch.. same framework as node fetch
    fetch(endpoint)
    .then(function(response){
        if(!response.ok){
            throw Error(":( it broke")
        } else {
            return response.json()
        }
    })
    .then(function(dataArray){
        let completed = todo.isComplete ? "completed" : ""
        $("ul").empty()
        dataArray.forEach(function(todo){
            $("ul").append(
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class="fas fa-trash"></i></span></li>`)
        })
    })
    .catch(function(error){
        console.error("Issues reading from the database: ", error);
    })
})


//create
$("input").keypress(function(event){
    if( event.which === 13 && $(this).val() !== "") {
        let newTodoItem = {
            description : $(this).val()
        }
        let endpoint = `${baseUrl}/todos`
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodoItem)
        })
        .then(function(response){
            if(!response.ok){
                throw Error("No response creating data")
            } else {
                return response.json()
            }
        })
        .then(function(newTodo){
            $("ul").append(`<li data-id=${newTodo.id}> ${newTodo.description} <span><i class="fas fa-trash"></i></span></li>`)
            $("input").val("")
        })
        .catch(function(err){
            console.error("Error creating data to server: ", err)
        })
    }
})


//Jquery is good for working with the DOM
//Note: browser should never be updated unless DB is updated

/* Update Todo */
$("ul").on("click", "li", function(){
    let thisId = $(this).data('id');
    let endpoint = `${baseUrl}/todos/${thisId}`
    let self = this;
    fetch(endpoint, {method: "PUT"}) //changing method to put
    .then(function(response){
        if(!response.ok){
            throw Error("Issues getting data from Server")
        } else {
            return response.json()
        }
    })
    .then(function(data){
        $(self).toggleClass("completed")
    })
    .catch(function(error){
        console.error('Error updating todo on front end', error)
    })

    $(this).toggleClass("completed"); // updating the class, either adds class or removes it
})





// DELETE
$("ul").on("click", "span", function(event){
    let thisId = $(this).parent().data('id'); //getting a data attribute
    let endpoint = `${baseUrl}/todos/${thisId}`
    let self = this; //refering to span
    fetch(endpoint, {method: "DELETE"})
    .then(function(response){
        if(!response.ok){
            throw Error("Cannot delete an item from server")
        }else {
            return response.json()
        }
    })
    .then(function(data){
        console.log(data)
        $(self).parent().remove()
    })
    .catch(function(error){
        console.error("Error deleting:", SyntaxError)
    })
})
