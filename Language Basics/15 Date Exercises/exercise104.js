/**
 * Exercise 104 - Timestamps
 * Using the JavaScript Date object, get the current timestamp and display it in
 * the console
 */

const timeStamp = () => {
  // const date = new Date();
  return Date.now();
}

console.log('Current timestamp is: ' + timeStamp());