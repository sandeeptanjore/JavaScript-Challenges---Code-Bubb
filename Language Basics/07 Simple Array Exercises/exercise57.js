/**
 * Exercise 57 - Add an item
 * Using the following array:
 * const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl'];
 * Add the language Ruby to the end of the languages array, making it the last
 * item in the array
 */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl'];
let newLanguage = languages.push('Ruby');

console.log(`New language list is: ${languages}`);