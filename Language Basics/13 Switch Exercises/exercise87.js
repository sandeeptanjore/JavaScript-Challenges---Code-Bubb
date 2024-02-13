/**
 * Exercise 87 - Flick the switch
 * Complete the following switch statement:
 * let number = 1;
 * let switchValue;
 * switch (number) {
   }
 * To satisfy the following conditions:
 * When the number variable is 1, set the value of the switch variable to 'On'
 * When the number variable is 0, set the value of the switch variable to
 * 'Off'
 * For any other values, set the switch variable to 'Unknown'
 * Display the contents of your switch variable to the console to check your
 * results.
 */

let number = 1;
let switchValue;

switch (number) {
  case 1:
    switchValue = 'On';
    console.log(switchValue);
    break;
  case 0:
    switchValue = 'Off';
    console.log(switchValue);
    break;
  default:
    console.log('Unknown');
}