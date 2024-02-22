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

let futureDate = new Date(2021, 1, 20, 1, 30,24);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();//essa é a maneira correta de fazer meses no JS
month = months[month];
//console.log(month)

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];//essa é a maneira correta de fazer dias no JS
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} am`;