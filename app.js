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
let days = t/oneDay;
days = Math.floor(days)
let hours = Math.floor( (t%oneDay) / oneHour);
let minutes = Math.floor((t%oneHour)/oneMinute);
let seconds = Math.floor((t%oneMinute)/ 1000);

// set values array;
const values = [days, hours, minutes, seconds];

//adding zeros when necessary
function format (item){
  if (item < 10) {
    return item = `0${item}`
  }
  return item
}

items.forEach(function(item, index){
  item.innerHTML = format(values[index]);
});
if (t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has
   expired</h4>`;
}

}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();