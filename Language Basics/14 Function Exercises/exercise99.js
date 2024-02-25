/**
 * Exercise 99 - Circumference of a circle
 * const perimeter = radius => {
 * }
 * Complete the above function to calculate the circumference of a circle given
 * the value of it's radius. The function should return the value of the calculation.
 */

const perimeter = radius => {
  let result = 2 * 3.14 * radius;
  return result;
};

console.log(`Circumference of a circle is: ${perimeter(9)}`);

console.log(`Circumference of a circle is: ${perimeter(1)}`);
