/**
 * Exercise 56 - Remove another item
 * Using the following array:
 * const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl'];
 * Create a new variable firstLanguage that contains the first item from the
 * languages array. Your code should also remove the first item from the
 * languages array too
 */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl'];
let firstLanguage = languages.shift();
console.log(`First language from the list is: ${firstLanguage}`);
console.log(`New language list is: ${languages}`);