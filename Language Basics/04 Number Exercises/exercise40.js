/**
 * Exercise 40 - No dice
 * Create a random number with JavaScript that represents a value found on a
 * common set of playing dice (1-6). Log the value to the console to check the
 * value you have generated
 */

let randomNumber = Math.random() * 6
randomNumber = Math.floor(randomNumber + 1);
console.log(randomNumber);