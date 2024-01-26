/**
 * Exercise 23 - A game of two halves
 * Given the following string:
 * const str = 'Half 1 Half 2';
 * 
 * Split the original string into two equal parts and store each half in it's own
*  separate variable.
 */

const str = 'Half 1 Half 2';
let firstPart,
  secondPart;

//Let's first check the length of the string
console.log(str.length);//13

//breaking 13 into 2 equal parts
firstPart = str.substring(0, 6);
secondPart = str.substring(7);

console.log(firstPart);
console.log(secondPart);