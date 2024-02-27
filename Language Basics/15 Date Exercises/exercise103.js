/**
 * Exercise 103 - What time is it?
*  Using the JavaScript Date object, display the current time in the console.
 */

const getCurrentTime = () => {
  let date = new Date,
    newformat;
  date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  newformat = date.substring(0, 1);
  newformat = newformat >= 12 ? 'PM' : 'AM'

  //console.log(date);
  //console.log(newformat);
  return `The current time is: ${date} ${newformat}`;
}

console.log(getCurrentTime());