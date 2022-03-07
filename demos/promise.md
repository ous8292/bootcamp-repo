Promise is an ES6 feature where the Promise class returns a promise object.

The promise object represents the eventual completion or failure, of an asynchronous action, and its resulting value, when available.

The object has an executor function which executes when the aciton is eventually completed.

Async action can be something like - - a HTTP call using fetch, axios, or ajax - reading a file from the file system - reading data from a remote database using something like mongoose or pg-promise client libray

Simply, a primise is like a contract note that says, I'll return this async actions restults in the future.
resolve: a function which is executed when the async action is successfull
reject: a function that runs when something is wrong

Async/Sync -----

Javascript runs on a single thread

Why Asysc Execution?
Non Blocking I/O (input/output)

Non Blocking I/O
When the I/O operation has been invoked, a messange is enqued along the provided callback function in the message queque (aka evnent queue)
allows you to continue to do things while things load
At some point in the future, afte rexecution of all the sync commands given to the thread is complete, the thread goes and looks for completed taskl in que

function students() { //sync (fn def)
let doggyhorse = 'doggy horse'
console.log("Taylor)
setTimeout(iris, 0);
console.log('zach')
dee();
fetch(www.asdas.com) //async (network
)
}

Ticks -
each time JS engine comes back to look for an event on the queue is called a tick
setTimeout
process.nextTick()

Synchronos
the sequence of events has to run before the rest can
follows from top down basically
