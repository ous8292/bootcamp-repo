var hour = 2;

if (hour < 12) {
  console.log("Good morning. Would you like some toast?");
} else if (hour > 12 && hour < 17) {
  console.log("Good afternoon. Time for tea!");
} else {
  console.log("Good night. Time for bed");
}

//ternary operator version of the if else, mostly used for a decision between two things

// var age = 18;

// var result = age > 21 ? ' YOu can buy alcohol.' : 'You are to young. Go home!!!';
// console.log(result);

//loops

//while loop

// var count = 1;

// while(count < 11){
//     console.log("count is " + count);
//     count++;
// }

//while loop that prints out every odd number 1 - 100

var count = 1; //starting point
// while (count <= 100 && count % 3) {
//     console.log("count is " + count);
// }

// while (count <= 100) {
//     console.log("count is " + count);
//     count = count + 2; // adding 2 to count, then updating the current count. OR count += 2; (short hand version)
// }

//for loop
//for ( starting, condition, increment)
for (var count = 1; count <= 5; count++) {
  console.log(count);
}
