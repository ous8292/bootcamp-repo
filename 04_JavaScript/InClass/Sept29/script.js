// var person = {
//     name: "Walter White",
//     age: 50,
//     family: ["Skylar", "Flynn", "Holly"], // array within the person object
//     city: "Albuquerque",
//     smart: true, // boolean
//     associates: { // associates object inside person object
//       friend: "Jesse",
//        enemy: "Gus"
//     },
//     hobbies: "Cooking"
// }


// person.age;
// person.family[1];
// person.associates.enemy;

// person["age"]
// person["family"[1]];
// person["associates"]["enemy"];



// var posts = [
//     {
//       title: "How to cook the perfect scrambled eggs",
//       author: "Bob Odenkirk",
//       comments: ["The secret is lots of butter", "Will this raise my cholesterol?"]
//     },
//     {
//       title: "Eggs are cheap, quick, and easy",
//       author: "Bryan Cranston",
//       comments: ["What if I don't have a spatula?", "I love butter.", "Salt and pepper are the ONLY spices you need"]
//     }
// ]


// posts[0].author;
// post[0]["author"]

// posts[1].comments[1]
// posts[1]["comments"][1]

// posts[0].author.slice(0,3);




// var eggs = {
//     butter: "Sure, lots of it",
//     saltNPepper: true,
//     cooking: [
//         {recipe:"scrambled"},
//         {recipe:"Fried"},
//         {recipe:"Soft boils"}
//     ],
//     tasty: true
// }


// eggs.cooking[0].recipe






// DOCUMENT OBJECT MODEL "DOM"

// var food = document.getElementById("fruit"); // pulls using the ID
// var food2 = document.getElementsByClassName("breakfest"); //pulls using the class
// console.log(food2[0]);
// var food3 = document.getElementsByTagName("li"); //pulls first li
// console.log(food3[0]);
// var food4 = document.querySelector("#fruit"); //pass in tags, classes, ids, anything css would use
// console.log(food4)
// var food5 = document.querySelectorAll("h1"); // returns all matching selectors, returns node list
// console.log(food5)


// we can manipulate the css using JS
// first we grab the element, then make the change

//one way
// document.getElementById("fruit").style.color = "green";
// document.getElementById("fruit").style.border = "10px solid orange";
// document.getElementById("fruit").style.fontSize = "36px";
// document.getElementById("fruit").style.background = "blue";
// document.getElementById("fruit").style.marginTop = "150px";


//simpler way
// var fruit = document.getElementById("fruit");

// fruit.style.color = "green";
// fruit.style.border = "10px solid orange";
// fruit.style.fontSize = "36px";
// fruit.style.background = "blue";
// fruit.style.marginTop = "150px";




//Coding Challange
// Every 3 seconds background changes from blue to orange and loops


// var theBody = document.querySelector("body");
// var isOrange = false;

// setInterval(function(){
//     if(isOrange === true){ //if isOrange is equal to true
//         theBody.style.background = "blue";
//     } else {
//         theBody.style.background = "orange";
//     }
//     isOrange = !isOrange //is orange is being negated to True, now it will loop
// }, 3000);






//setInterval will let us run a function every set time
//if you had multiple colors you could put all those into an array, then have the function iterate through the array changing the background color






//this is how we can grab the text in an element, or update the text

// var theText = document.querySelector('li').textContent; //gives us the content
// var changedText = document.querySelector('li').textContent = "Sold out! check tomorrow"; //updating the text

// console.log(theText)


//Similar to textContent, but this allows us to gran the HTML and manipulate it

// console.log(document.querySelector("ul").innerHTML);

// document.querySelector("li").innerHTML = "Chocolate <b>Hazelnut</b> Croissant";

//We can read and write attr using get Attribute and setAttribute. sert requres two arguments: the attribute you want to change, and then value you want to change it with.

// document.querySelector("a").getAttribute("href");
// document.querySelector("a").setAttribute("href", "http://ww.amazon.com");





//Events
//examples: clicking on something, pressing a key, hoovering over
//Two fold: select an element, and add an event listener(code that runs when an event occures)

// document.querySelector("button").addEventListener("click", function(){
//     alert("how's it going");
// })

// document.querySelector("h1").addEventListener("mouseover",
// function() {
//     document.querySelector("p").textContent = "cheesecake bites"
// })