const greetings = [
    {id: 1, text: "Happy Hanukkah"},
    {id: 2, text: "Merry Christmas"}
]

// when you have a "forever" looking cmd
// JSE .. runs it and puts it on a queue (event queue)
//     .. moves on to accomplish the next cmd

const getGreetings = () => {
    let output = '';
    setTimeout(() => {
        greetings.forEach(g => {
            output += `<li>${g.text}</li>`
        })
        document.body.innerHTML = output;
        console.log('Number of greetigs are:', greetings.length)
    }, 0)
}

function createGreeting(greeting, cb){
    setTimeout(() => {
        greetings.push(greeting)
        cb()
    }, 0)
}

createGreeting(
    {id: 3, text: "Id Mubarak"},
    getGreetings
)

// What are callbacks?

//  1. a way to break functionality into separate fn's
//     and recombine them as callbacks (why?) (aka composition)

//  2. allows us to alter the order in which these fn's
//     run (why?)

//  3. not to slow down the JS engine (why?)

//  4. pass one fn into another as an argument (how?)



// What are Promises?

// 1. To avoid callback pyramid (cb pyramid of doom)
//    Makes our code more readable