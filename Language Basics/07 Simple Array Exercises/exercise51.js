/**
 * Exercise 51 - The first and last items
 * Given the following array:
 * const arr = [102, 4, 22, 7, 32, 9, 40];
 * Define two variables called first and last that give pick out the first and last
 * values from the array. Check your variables have the values of 102 and 40
 * respectively by logging the result to the console
 */


const arr = [102, 4, 22, 7, 32, 9, 40];
let first = arr.shift(),
  last = arr.pop();

console.log(`The first item is ${first}`);
console.log(`The last item is ${last}`);