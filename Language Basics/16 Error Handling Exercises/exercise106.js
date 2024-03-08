/**
 * Exercise 106 - Catch an error
 * The following code will produce an error:
 * const data = JSON.parse('not json');
 * Use a JavaScript try/catch block to catch the error and display a message to the
 * console (e.g. 'Invalid JSON found')
 */

const catchErrorMessage = () => {
  const errorMessage = 'Invalid JSON found';
  try {
    let data = JSON.parse('not json');
  } catch (err) {
    console.log(errorMessage);
  }
};

catchErrorMessage();

