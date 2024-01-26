/**
 * Exercise 27 - To sentence case
 * Convert the following string to be sentence case (first letter of the string capitalised).
 * const str = 'to be or not to be';
 */

const str = 'to be or not to be';
let newStr;


newStr = str.substring(0, 1);
newStr = newStr.toUpperCase() + str.substring(1, str.length);
console.log(newStr);


