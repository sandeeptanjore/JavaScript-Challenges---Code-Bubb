/**
 * Exercise 84 - Largest number
 * Given the following array:
 * const numbers = [33, 42, 72, 91, 52, 98, 22, 19, 7];
 * Use a JavaScript for or while loop to determine the largest number in the
 * numbers array and display it in the console.
 */

const numbers = [33, 42, 72, 91, 52, 98, 22, 19, 7];
//const numbers = [33, 42, 72, 91, 52, 98, 22, 19, 7, 33, 42, 72, 91, 52, 98, 22, 19, 7, 33, 42, 72, 191, 5452, 798, 22, 19, 7];
let largestNumber = numbers[0];

//console.table(numbers);

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(`The largest number from the array is : ${largestNumber}`)
