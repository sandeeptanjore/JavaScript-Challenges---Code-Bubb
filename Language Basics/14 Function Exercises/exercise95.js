/**
 * Exercise 95 - The first letter
 * Write a function that takes one argument which is a string and then returns the
 * first letter from the string.
 */

const firstLetter = (string) => {
  console.log(`The string ${string} when split will be:  ${string.split('')}`);
  console.log(`The first letter of the ${string} is: ${string.split('')[0]}`);
};

firstLetter('Sandeep');
firstLetter('Charlotte');
firstLetter('Arias');

//Another way of resolving the above problem:

const firstAlphabet = (string) => {
  let newString = [...string];
  newString = newString[0];
  return newString;
}

console.log(firstAlphabet('Anita'));
console.log(firstAlphabet('Gary'));
console.log(firstAlphabet('Mendieta'));

//Another way of resolving the above problem:

const originalString = (string) => {
  console.log(`The original string is: ${string} and its first alphabet: ${string[0]}`)
}

originalString('Toronto');

