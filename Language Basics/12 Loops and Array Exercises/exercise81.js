/**
 * Exercise 81 - Sum all the numbers
 * Given the following array:
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * Use a JavaScript for or while loop to add up (sum) the values that are stored
 * in the numbers array. Display your result in the console.
 */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
console.table(numbers);
for (let number of numbers) {

  sum = sum + number


}
console.log(`Sum of all number is: ${sum}`);
