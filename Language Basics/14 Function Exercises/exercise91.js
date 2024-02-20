/**
 * Exercise 91 - Multiply three numbers
 * Write a function that takes three arguments which are numbers and multiplies
 * them all together before finally returning the result.
 */

let multiplication = (firstNumber, secondNumber, thirdNumber) => firstNumber * secondNumber * thirdNumber;


let number1 = 25,
  number2 = 1,
  number3 = 25;

console.log(multiplication(number1, number2, number3));

console.log(multiplication(2, 3, 4));

console.log(multiplication(25, 25, 0));
