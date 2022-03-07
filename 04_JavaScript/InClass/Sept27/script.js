



// //Slice()
// //Returns the selected elements in a new array

// var pets = ["Moxxie", "pickle", "Hootchie", "MonkeyButt"];
// pets.slice(1,3);


// // slice(start, finish), does not actually include the end
// pets.slice(2,3);
// //slices only hootchie. 
// //Slice includes the first value, and whatever UP to the last value

// //if you use slice with no values, you can copy an array

// var newPets = pets.slice();

// //["Moxxie", "pickle", "Hootchie", "MonkeyButt"]
// //This is very useful if you want to copy an array to manupulate it. then later re-assiggn to your orginal value

//
// var numbers = [1,2,3,4,5];
// for(var i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i]*2;
// }


// var pets = ["Moxxie", "pickle", "Hootchie"];

// pets.forEach(function(element) {
//     console.log(element);
// });


//map()
//creates a new array with the results of calling a function for every array element. Calls the provided function once for each element in an array, in order.

// var numbers = [4, 9, 16, 25];

// var squareRoots = numbers.map(Math.sqrt)
//squareRoots -> [2,3,4,5]


//filter()
//Creates an array, filled with all array elements tht passed a test (provided bby a function). does not affect the original array

// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// var longWords = words.filter(function(){
//     return thisword.length > 6;
// });


//reverse()
//reverses the order of the lements in an array. Alters the orginal

// var pets = ['Moxie', 'Pickle', 'Hootchie'];

// pets.reverse()

//sort()
//Sorts the items in an array. can be alphabetic or numeric. Either ascending, or decsending. By deefault it sorts strings as aphabetiuc ascending order. Sort sorts things by converting them to strings, so numbers can confuse it.

// var pets = ['Moxie', 'Pickle', 'Hootchie'];
// pets.sort()



//Sort()- comparefunction- can fix the sort problem with numbers

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});




// OBJECTS,ARRAYS,STRINGS

//String.length
//The .length property returns the length of a string. Includes all spaces

// var txt = 'banana';
// txt.length; //6
// var txt = 'I like bananas';
// txt.length; //14
// var txt = '     I like oranges  ';
// txt.length //21


//String.trim()
// removes white spaces from beginning and end of strings:

// var txt = '     I like oranges  ';
// var newTxt = txt.trim();
// newTxt.length; //14 - white spaces have neem removed


//String.slice()
//just like an array, makes a copy

// var words = 'I love talking to animals.';
// var results = words.slice(7,14);  // slices out the word 'talking'

//String.indexof()
//returns the position of the first occurence of a specified value in a string. Returns -1 if the value to search for never occurs

// var question = 'What is my name';
// var result = question.indexOf('name');
// //11 - 'name' starts at index 11

// var newresult = question.indexOf('George');
// //-1 because George is not found anywhere

// var lastResult = quesiton.indexOf('what')
// //0



//String.substr()
//extracts parts of a string, beginning at the character at the specifid position, and returns the specified number of chars.

// var name = 'My name is Susan Jones.';

// var result = name.substr(11,5); //'Susan'
// var newResult = name.substr(11,11) //'Susan Jones'
// var lastresult = name.substr(11); //'Susan Jones.'


//String.substring()
//extracts tje characters from a string, between two specified indicies, and returns the new sub string. everything but not including the last point

// var name = 'My name is Susan Jones.';
// var result = name.substring(11,22); //Susan Jones

// //we can use other methods

// var name = 'My name is Robert Joran, Jr.';
// var result = name.substring(11, name.lenth-1); //Robert Jordan, Jr





//OBJECTS

//Objects are another type of data structure like strings and arrays
//Basically a JavaScript version of a dictionary
//There is no set order to these key:value pairs, unlike arrays
var person = {
    name: "Walter White:",
    age: 50,
    city: "Albuquerque",
    hobbies: "Cooking"
}

//this is dot notation:
person.name;

//this is bracket notation
person["name"];

//to update, still using dot or bracket notation

person.name = "Heisenberg";
person["hobbies"] = "Cooking blue stuff";


//another way to create an object
//assign an empty array to person variable
var person = {}
person.name = "water";
person.age = 50;
person.city = "Albuquerque";
person.hobbies = "cooking";

// you can have arrays within the object
// you can have booleans
// you can have other objects