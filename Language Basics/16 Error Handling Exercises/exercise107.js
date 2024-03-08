/**
 * Exercise 107 - Catch a custom error
 * Create a new JavaScript Error and give it a message of your choice. Then, write
 * a try/catch block where your custom error is thrown and then caught. Display
 * the result of the error inside the catch block to the console
 */

const errorMessage = 'Your function is not defined';

const errorFunction = () => {
  try {
    addSum(num1, num2);
  } catch (err) {
    console.log(errorMessage);
  }
};

errorFunction();