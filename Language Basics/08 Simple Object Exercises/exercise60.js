/**
 * Exercise 60 - A full person object
 * Given the following Object representing a person:
 * const person = {
                  firstName: 'Sarah',
                  lastName: 'Hennings',
                  age: 33,
                  role: 'Developer'
                };
 * Write a console statement that logs the person's full name (firstName and
 * lastName) to the console output. You should include a space in between their
 * first and last name in your output.               
 */
const person = {
  firstName: 'Sarah',
  lastName: 'Hennings',
  age: 33,
  role: 'Developer'
};

console.log(`Person's full name is: ${person.firstName} ${person.lastName}`);