/*

This project requires you to take two different arrays and compare to see if the student got the correct answers.

Array #1 should contain the correct answers to an exam, like ["a", "a", "b", "d"].

The second one is the "answers" array and contains student's answers.

The two arrays are not empty and are the same length.

Their length is not known.

Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

You will need to test various lengths of arrays with different answers to ensure your alogrithm works.

Example Inputs:

    var answersArray = ['a', 'b', 'a', '', '', 'c'];
    var rubricArray
    var score = testScore(answersArray, rubricArray);
*/



answersArray= ["a", "a", "b", "d"]

rubricArray = ["a", "c", "b", "b"]

var score = 0

let testScore = (answersArray,rubricArray ) => {
    for (let i = 0; i < arrOne.length; i++) {
        

    }







    //compare each value of the array
    if (answersArray == rubricArray){
        score = score + 4
    } else {
        score = score - 1
    }
    return score
}

console.log(score)