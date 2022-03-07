document.querySelector("form").addEventListener("submit", function(event){
    var errors = [];

    if(document.getElementById("name").value === ""){
        errors.push("Please enter a name");
    }

    if(document.getElementById("password").value.length <= 6){
        errors.push("Password must be greater than 6 characters");
    }
    

    //If the length of the errors array is greater than 0
    if(errors.length > 0){
        event.preventDefault();
        document.querySelector("#wrapper").style.border = "3px solid red";
        document.querySelector("p").textContent = errors.join(",")
    }
})