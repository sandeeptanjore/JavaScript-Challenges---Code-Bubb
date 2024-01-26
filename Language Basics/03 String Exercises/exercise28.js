/**
 * Exercise 28 - The first and last
 * Given the following string:
 * const str = 'that is the question';
 * Use JavaScript to get the first and last characters from the original string above.
 * 
 * Log the result to the console to check your solution.
 */

const str = 'that is the question';
let firstChar, lastChar;

firstChar = str.substring(0, 1);
lastChar = str.substring(str.length - 1);

console.log(firstChar);
console.log(lastChar);