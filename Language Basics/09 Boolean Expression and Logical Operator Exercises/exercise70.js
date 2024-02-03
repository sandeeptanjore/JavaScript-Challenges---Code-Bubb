/**
 * Exercise 70 - You need to know exactly 4 languages
 * Given the array:
 * let languages = ['English', 'French', 'Italian', 'Spanish'];
 * Write a boolean expression (which will result in true) to determine whether the
 * languages array has exactly 4 items in it. Call the .pop() or .push() function
 * on the array to remove or add an item then check your expression again
 */

let languages = ['English', 'French', 'Italian', 'Spanish'];
//determine whether the languages array has exactly 4 items in it
console.log(languages.length === 4); //true

//Calling the  .push() function to check again
let newLanguage = languages.push('Hindi');
//console.log(languages);
console.log(languages.length === 4); //false
