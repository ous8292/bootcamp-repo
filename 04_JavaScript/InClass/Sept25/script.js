
// //Global variable
// var blahblah = "please give me coffee"

// function hello(){
//     //local scope
//     var blah = "it's early in the morning";
//     console.log(blah);
// }


// hello();

// //this will call the global variable
// console.log(blahblah);

// //this will error out due to trying to access a local scope var
// console.log(blah);




//Higher Order Functions

// function hello(){
//     document.write("Will you be my friend?");
//     document.write("Please?, I'll give you money!");
// }

// setInterval(hello, 1000)


//anon function, have no name, are usually used once

// setInterval(
//     function(){
//         document.write("hello");
//     }, 3000
// );



//Arrays

// var names = ['Reed', 'Susan', 'Ben', 'Johnny', 'Franklin'];

// console.log(names[0]);
// console.log(names[3]);

// var pets = ['Moxxi', 'Pickle', 'Hootchie'];

// console.log(pets[0])
// console.log(pets[1])
// console.log(pets[2])

// pets[1] = 'Doggo'

// console.log(pets)

// //array length
// console.log(pets.length)
// //prints the last value in the array
// console.log(pets[pets.length - 1])

// //array methods

// pets.toString();
// var newPets = pets.toLocaleString();
// console.log(newPets)
// //"Moxie,Doggo,Hootchie"


// pets.join(' * ');
// //"Movie * Pick;e * Hootchie"


//concat()

// var pets = ['Moxxie', 'Pickle', 'Hootchie'];
// var people = ['Karen', 'Patrick'];
// var family = pets.concat(people);
// console.log(family)


//indexOf() searches for specific items, and returns its index

var fruits = ["Banana", "orange", "apple", "Mango"];

var apple = fruits.indexOf("Apple");
//2

//returns only the first match


//.push method pushes to the end of the excisiting array

//.pop lets us remove last element
//.shift 

var pets = ["Moxxie", "pickle", "Hootchie", "Monkeybutt"];

//shift removes
pets.shift()
console.log(pets)
var boof = pets.shift()
console.log(boof)

//unshift adds


