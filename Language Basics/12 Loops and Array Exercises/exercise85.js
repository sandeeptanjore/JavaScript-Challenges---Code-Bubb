/**
 * Exercise 85 - Smallest number
 * Given the following array:
 * const numbers = [33, 42, 72, 91, 52, 98, 22, 19, 7];
 * Use a JavaScript for or while loop to determine the smallest number in the
 * numbers array and display it in the console.
 */

//const numbers = [33, 42, 72, 91, 0, 52, 98, 22, 19, 7, 43598, -8495, -8, -71283];
const numbers = [33, 42, 72, 91, 52, 98, 22, 19, 7];

let smallestNumber = numbers[0];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}
console.log(`The smallest number in the array is : ${smallestNumber}`);