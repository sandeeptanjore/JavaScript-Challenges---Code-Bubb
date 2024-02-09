/**
 * Exercise 83 - How many sixes
 * Given the following array:
 * const numbers = [1, 6, 2, 6, 3, 6, 6, 4, 6, 5, 6];
 * Use a JavaScript for or while loop to count the number of sixes (value of '6')
 * that are in the numbers array. Display your result to the console
 */

const numbers = [1, 6, 2, 6, 3, 6, 6, 4, 6, 5, 6];
let count = 0;

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] === 6) {
    count = ++count;

  }
}

console.log(`Number of 6's that are present in numbers array are: ${count}`);