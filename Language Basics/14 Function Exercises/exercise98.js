/**
 * Exercise 98 - Perimeter of a rectangle
 * const perimeter = (length, width) => {
 * }
 * Complete the above function to calculate the perimeter of a rectangle given
 * the length and width. The function should return the value of the calculation.
 */

const perimeter = (length, width) => {
  let result = 2 * (length + width);
  return result;
};

console.log(`The Perimeter of a rectangle is: ${perimeter(29, 39)} `);

console.log(`The Perimeter of a rectangle is: ${perimeter(6, 14)} `);