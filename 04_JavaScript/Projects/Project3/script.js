var prompt1 = prompt('Give a number');
var prompt2 = prompt('Give another number.');
var prompt3 = prompt('Give a number again.');
var number1 = parseInt(prompt1)
var number2 = parseInt(prompt2)
var number3 = parseInt(prompt3)


var array = [number1, number2, number3];
var sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);