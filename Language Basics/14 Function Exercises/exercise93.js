/**
 * Exercise 93 - Does the property exist?
 * Write a function that takes two arguments, the first of which is an object and
 * the second a string. The function should then return a true or false value
 * depending on whether or not the property (indicated by the string value passed
 * in) exists on the object passed in.
 */

let arguments = (firstArgument, secondArgument) => {
  arguments.hasOwnProperty(secondArgument);
}

console.log(arguments({
  name: 'Sandeep',
  skills: 'Oracle and JS'
}),
  'Soni');

