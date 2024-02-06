/**
 * Exercise 76 - Grading
 * Given the variable
 * let score = 65
 * Write an if statement in JavaScript that displays a character on the console
 * (representing a grading mark) depending on the value stored in the score
 * variable. The grading is as follows:
 * More than 50 - D
 * More than 60 - C
 * More than 70 - B
 * More than 80 - A
 * For anything else a value of U should be displayed.
 */

let score = 65;
//let score = 165;
//let score = 45;
//let score = 54;


if (score > 80) {
  console.log('Grade A');
} else if (score >= 70 && score <= 79) {
  console.log('Grade B');
} else if (score >= 60 && score <= 69) {
  console.log('Grade C');
} else if (score >= 50 && score <= 59) {
  console.log('Grade D');
} else {
  console.log('Grade U');
}