/**
 * Exercise 97 - Perimeter of a square
 * const perimeter = side => {
 *  }
 * Complete the above function to calculate the perimeter of a square given the
 * value of one of the sides. The function should return the value of the
 * calculation.
 */


const perimeter = (side) => {
  let result = 4 * side;
  return result;
};

console.log(`Perimeter of a square is:  ${perimeter(16)}`);
console.log(`Perimeter of a square is:  ${perimeter(3)}`);