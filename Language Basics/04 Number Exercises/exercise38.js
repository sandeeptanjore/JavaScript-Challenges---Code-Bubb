/**
 * Exercise 38 - Which is the biggest?
 * Given the numbers 1,8,2,9,3,7,4,6, use JavaScript to determine which is the
 * largest number.
 */

let numbers = [1, 8, 2, 9, 3, 7, 4, 6];
console.log(Math.max(...numbers));

// the above problem can also be solved as follows:

console.log(Math.max(1, 8, 2, 9, 3, 7, 4, 6));