var halloween = new Date('2018-10-31T00:00:00');
var halloweenDate = halloween.getDate();
var today = new Date();
var todayDate = today.getDate();

var timeLeft = halloweenDate - todayDate;

document.getElementById("time-left").innerHTML = timeLeft;

if (timeLeft === 1) {
  document.getElementById("days").innerHTML = 'day';
}
