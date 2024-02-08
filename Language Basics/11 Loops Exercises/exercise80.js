/**
 * Exercise 80 - Add until 25
 * Using any type of loop, count from the value of 1 to 25 adding each number
 * together to form a total (e.g. 1 + 2 + 3 + 4 …) then display this value in the
 * console 
 */
let sum = 0;
for (let i = 1; i <= 25; i++) {
  sum = sum + i;

}

console.log(`Sum of numbers from 1 to 25 is: ${sum}`);