const halloween = new Date('2018-10-31T00:00:00').getTime();
const today = new Date().getTime();

let timeLeft = halloween - today;

let days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
/* timeLeft in milliseconds / one day in milliseconds (time in seconds * time in minutes * time in hours * time in days) */

document.getElementById("time-left").innerHTML = days;

if (timeLeft === 1) {
  document.getElementById("days").innerHTML = 'day';
}
