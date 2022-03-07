//Exercise 1

function printDay(num) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[num]
}

//Exercise 2

//Make a function that takes in one argument (an array) and retuirns the lsat value of the array.

let a = [1,2, 3, 4];

function last_Element(arr) {
    return arr[arr.length -1]
}




//Exercise 3

//Using push and unshift, make this array contain the number 0 through 7 in order

var arr = [2,3,4];
arr.unshift(1);
arr.unshift(0);
arr.push(5);
arr.push(6);
arr.push(7);

// can also do unshift(0,1) push(5,6,7)


//Exercise 4
//Make a function called withoutFirst that returns all the elements in the array except for the first one

arr = [1,2,3];

function withoutFirst(a){
    return arr.slice(1)
}


//Exrcise 5
// Make a function that takes in two arguments both strings. If the first string is greater in length than the second, the function returns "first is longer". If the second string is greeater in length that the first, the function returns "Second is longer". Other wise return "equal length"

function stringCompare(stringyOne, StringyTwo) {
    if (stringyOne.length > StringyTwo.length){
        return "First is longer"
    } else if (stringyOne.length < StringyTwo.length) {
        return "Second is longer"
    } else {
        return "They are equal length"
    }
}



//Exercise 6
//Make a function called 'theLastofUs' that returns all the elements in the array for except for the last one

var food = ['onion rings', 'fries', 'burgers', 'chili', 'hot dog'];

function theLastofUs(a) {
    return a.slice(0,-1)
}


//Exercise 7
//Make a function that takes one argument (an array) and returns an array with values reversed.

//cant use .reverse cause it actually reverses the array.

var array = [1,2,3]
function theFlip(a){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i])
    }
    return newArr
}


//Exercise 8
//Make an array and loop through it so the output prints out green values on a web page. Note: you will need to use some inline CSS to make this work

var arry = ['Burgers', 'fries', 'onion rings'];

function greenWriteOut(arr) {
    for(let i = 0; i < arr.length; i++){
        document.write(`<p style="color: green">${arr[i]}</p>`)
    }
}


//Exercise 10
//Create a function that takes an array of strings as an argument. This function should check every value in the array, adn return back all the strings that are greater than 5 characters long.

var food = ['onion rings', 'fries', 'burgers', 'chili', 'hot dog'];




function checker(arr) {
    return arr.filter(function(food){
        return food.length > 5
    })
}

function checkerfor(arr) {
    let newArr = []
    for(let i=0; i <arr.length; i++){
        if(arr[i].length >5){
            newArr.push(arr[i])
        } 
    } // loop is done
    return newArr
}



//Part 2 study sess

//Exercise 3
//Create a function called nootFirstNotLast() with a parameter called arr. It will take an array of 3 or more elements as an argument.The function will return an array of elements that aren't the first and last elements. the function should not mutate the original array

array = ['dog', 'horse', 'elephant', 'donkey', 'cat', 'chicken']

// function notFirstNotLast(arr) {
//     return arr.splice(1,4)
// }

//i++ is short hand is for i+=1
// which is shorthand i = 1 + i


function notFirstNotLast2(arr) {
    let newArry = []
    //First part of for loop - initiation - we're starting at index 1
    // second part of for loop - condition (for stopping)
    //Third part of for loop - incrementer, 
    for( let i = 1; i < arr.length - 1; i++){
        newArry.push(arr[i])
    }
    return newArry
}


}

//aproach 2 - copy and mutate
function notFirstnotLastMuty(arr){
    let copy = arr.slice() // makes a copy of the entire array
    copy.pop() //remove the first
    copy.shift() //removes the last element
    return copy
}



//Exercise 4
let chefs = ["Frederick", "Julia",]

function howManyChefs(chefs){
    if(chefs.length >= 5) {
        return "Too many chefs"
    } else if(chefs.length == 2 || chefs.length == 3 || chefs.length == 4) {
        return "Just enough chefs"
    } else if(chefs.length <= 1) {
        return "Not enough chefs"
    };
};
// could also use (chefs.length >= 2 && chefs.length <= 4) for in



//Exercise 5

function makePerson(name, age, isSilly) {
    return {
        name: name,
        age: age,
        isSilly: isSilly,
    }
}

// with variable
function makePersonVar(name, age, isSilly) {
    let myPerson = {
        name: name,
        age: age,
        isSilly: isSilly,
    }
    return myPerson
}



function makePersonEmpty (name, age, isSilly) {
    let myPerson = {}
    myPerson.name = name;
    myPerson.age = age;
    myPerson.isSilly = isSilly;
    return myPerson
}


let Peter = makePerson('Peter', 28, true);
let PeterGood = makePerson('PeterGood', 10, false);
let PeterEvil = makePerson('PeterEvil', 1, true);


function canRentCar(person) {
    if (person.age >= 25 && person.isSilly === true) { //mpre specific
        return "Yes, but maybe you shouldn't"
    } else if (person.age >= 25){ //less specific
            return true
        } else {
            return false
        }
    }
    



    //Create a function called longWord has a parameter called 'word'. It will take in a string that is 1 or more characters in length. Your function should return TRUE if the word is 7 chars or longer if not return false

function longWord(word) {
    if(word.length >= 7){
        return true
    } else {
        return false
    }

}



var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];



function yMonth(){
    return months.filter(function(month) {
        //will check if last letter to see if it's lower case y
        return month[month.length-1] === "y"
    })

}

function abreviatedMonths() {
    return months.map(function(month){
        return month.toUpperCase().slice(0,3)
    }) //creates a new array
}

function abreviatedMonthsFor(){
    let m = []
    for(let i = 0; i < months.length; i++){
        m.push(months[i].slice(0,3).toUpperCase())
    }
}
abreviatedMonths()



function calc(a) {
    return function (b) {
        return function (c) {
            return a + b * c;
        };
    };
}

console.log(calc(2)(3)(4));