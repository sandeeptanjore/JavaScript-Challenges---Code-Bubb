/**
 * Exercise 55 - Remove an item
 * Using the following array: 
 * const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl'];
 * Create a new variable lastLanguage that contains the last item from the
 * languages array. Your code should also remove the last item from the
 * languages array too
 */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala', 'Perl'];
let lastLanguage = languages.pop();
console.log(`The last language removed is: ${lastLanguage}`);
console.log(`Refreshed languages are: ${languages}`);