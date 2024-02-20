/**
 * Exercise 94 - Check my grade
 * Write a function that displays a character on the console (representing a
 * grading mark) depending on the value passed in as an argument to the
 * function. The grading is as follows:
 * More than 50 - D
 * More than 60 - C
 * More than 70 - B
 * More than 80 - A
 * For anything else a value of U should be displayed
 */

let checkMyGrade = (marks) => {
  if (marks > 80) {
    console.log('Grade A');
  } else if (marks >= 70 && marks <= 79) {
    console.log('Grade B');
  } else if (marks >= 60 && marks <= 69) {
    console.log('Grade C');
  } else if (marks >= 50 && marks <= 59) {
    console.log('Grade D');
  } else {
    console.log('Grade U');
  }
}

checkMyGrade(89);
console.log(' ');
checkMyGrade(34);
console.log(' ');
checkMyGrade(70);