/**
 * Exercise 95 - The first letter
 * Write a function that takes one argument which is a string and then returns the
 * first letter from the string.
 */

let firstLetter = (string) => {
  console.log(`The string ${string} when split will be:  ${string.split('')}`);
  console.log(`The first letter of the ${string} is: ${string.split('')[0]}`);
};

firstLetter('Sandeep');
firstLetter('Charlotte');