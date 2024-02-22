const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4'); // nao teria problema selecionar as classes mas aqui mostra como esse método é bom e capaz

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()+1;

//let futureDate = new Date(2020, 1, 25, 5, 30,0); here we used it to make tests with many possible dates



const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11,30,0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();//essa é a maneira correta de fazer meses no JS
month = months[month];
//console.log(month)

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];//essa é a maneira correta de fazer dias no JS
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}
 ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today;

//1s = 1000ms
//1m = 60s
// 1hr = 60min
// 1d = 24hr

//value in ms in one day
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;

//calculate all values
// Calculate the number of days remaining until the future date
let days = t/oneDay;
// Divides the remaining time t by the number of milliseconds in a day (oneDay). This provides the total number of remaining days.

// Round down to ensure we have a whole number of days
days = Math.floor(days)
// Calculate the number of hours remaining after removing the already counted days
let hours = Math.floor( (t%oneDay) / oneHour);
// Calculate the number of minutes remaining after removing the already counted hours
//Calculates the remainder of time after removing the days and then divides by the number of milliseconds in an hour (oneHour). This provides the number of remaining hours.
let minutes = Math.floor((t%oneHour)/oneMinute);
// Calculate the number of seconds remaining after removing the already counted minutes
// Calculates the remainder of time after removing the hours and then divides by the number of milliseconds in a minute (oneMinute). This provides the number of remaining minutes.
let seconds = Math.floor((t%oneMinute)/ 1000);
//Calculates the remainder of time after removing the minutes and then divides by 1000 to convert to seconds. This provides the number of remaining seconds.

// set values array;
const values = [days, hours, minutes, seconds];

//adding zeros when necessary
function format (item){
  if (item < 10) {
    return item = `0${item}`
  }
  return item
}

// Update the HTML content of each element in the items NodeList with the formatted time values
items.forEach(function(item, index){
  item.innerHTML = format(values[index]);
});

// Check if the remaining time (t) has reached zero or negative
if (t < 0) {
  // If the time has expired, clear the countdown interval to stop further updates
  clearInterval(countdown);
  // Update the HTML content of the deadline element to display an expired message
  deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has
   expired</h4>`;
}

}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();