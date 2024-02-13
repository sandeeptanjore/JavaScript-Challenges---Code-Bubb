/**
 * Exercise 86 - Switch user
 * Given a variable:
 * let user = 'admin';
 * Write a switch statement that displays a message to the console depending on
 * the value stored in the user variable following cases:
 * If the value provided is 'admin', display You have full access
 * If the value provided is 'manager', display You can view user details
 * For any other value, display You are a normal user
 * Try changing the value of the user variable to test each of the paths in the
*  switch statement.
 */

let user = 'admin';

switch (user) {
  case 'admin':
    console.log('You have full access');
    break;
  case 'manager':
    console.log('You can view user details');
    break;
  default:
    console.log('You are a normal user');
}