/**
 * Exercise 58 - Add an item at the start
 * Using the following array:
 * const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl'];
 * Add the language Node.js to the start of the languages array, making it the
 * first item in the array
 */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl'];
let firstLanguage = languages.unshift('Node.js');
console.log(`New language list is: ${languages}`);