/**
 * Exercise 96 - Pick a letter
 * Write a function that takes two arguments, the first of which is a string and the
 * second is a number. The function should return the letter from the string that
 * occurs at the position in the string as indicated by the number passed in to the
 * function.
 */

const pickALetter = (str, num) => {
  let letter = str[num];
  return letter;
}

console.log(pickALetter('Ottawa', 4));
console.log(pickALetter('Durban', 1));
console.log(pickALetter('Oracle', 0));