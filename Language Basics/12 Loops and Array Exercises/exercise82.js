/**
 * Exercise 82 - Show every other item
 * Given the following array:
 * const fruit = ['Cherry', 'Apple', 'Banana', 'Orange', 'Kiwi','Pineapple'];
 * Use a JavaScript for or while loop to only display every other item in the
 * fruit array in the console. (Output should be 'Apple', 'Orange', 'Pineapple');
 */

const fruit = ['Cherry', 'Apple', 'Banana', 'Orange', 'Kiwi', 'Pineapple'];

for (let i = 0; i < fruit.length; i++) {
  //Since we need to extract every other element, which is an odd index I am using odd number validation
  if ((i % 2) != 0) {
    console.log(fruit[i]);
  }

}