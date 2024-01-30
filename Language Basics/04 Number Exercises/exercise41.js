/**
 * Exercise 41 - 1 to 100
 * Create a random number with JavaScript in the range of 1 to 100.
 */

let randomNumber = Math.random() * 100
randomNumber = Math.floor(randomNumber + 1);
console.log(randomNumber);