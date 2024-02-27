/**
 * Exercise 101 - Day of the week
 * Using the JavaScript Date object, display the current day of the week in the
 * console. Hint: In order to display the day of the week as text (e.g. Monday,
 * Tuesday…) you will need to add some additional code to convert the information
 * you get from the date object to the day of the week
 */

// const date = new Date();
// const day = date.getDay();

// console.log(day);

const dayOfTheWeek = () => {
  const date = new Date();
  const day = date.getDay();

  //console.log(typeof day)
  //  if (day=== 0){
  //   return 'Sunday'
  //  }

  switch (day) {
    case 0:
      return 'Today is Sunday';
      break;

    case 1:
      return 'Today is Monday';
      break;


    case 2:

      return 'Today is Tuesday';
      break;


    case 3:
      return 'Today is Wednesday';
      break;


    case 4:
      return 'Today is Thursday';
      break;


    case 5:
      return 'Today is Friday';
      break;


    case 6:
      return 'Today is Saturday';
      break;
    default:
      return 'Invalid day of the week';
  }
}

console.log(dayOfTheWeek());