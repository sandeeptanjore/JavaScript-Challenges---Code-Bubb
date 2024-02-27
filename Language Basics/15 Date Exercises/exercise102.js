/**
 * Exercise 102 - What zone is this?
 * Using the JavaScript Date object, determine the current time zone and display
 * it in the console.
 */

const currentTimeZone = () => {
  const date = new Date();
  let zone = date.toLocaleString('en-US', { timeZoneName: 'short', });
  zone = zone.substring(21);
  return zone;

}
//currentTimeZone();
console.log(currentTimeZone());