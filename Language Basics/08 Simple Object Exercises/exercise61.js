/**
 * Exercise 61 - How many languages do you speak?
 * Given the following Object representing a person:
 * const person = {
                    name: 'James',
                    age: 21,
                    role: 'Developer'
                    languages: ['French', 'English', 'German', 'Polish', 'Italian']
                  };
 * Using JavaScript, determine how many languages the person has listed in the
 * object (the length of the languages property).               
 */


const person = {
  name: 'James',
  age: 21,
  role: 'Developer',
  languages: ['French', 'English', 'German', 'Polish', 'Italian']
};

console.log(`I can speak ${person.languages.length} languages. They are: ${person.languages}`);