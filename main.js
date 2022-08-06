// catch the element
let dayEle = document.querySelector(".Day");
let hourEle = document.querySelector(".hour");
let minEle = document.querySelector(".minute");
let secEle = document.querySelector(".second");

// declare the time

// changeDay();
function changeDay() {
  let currentDay = new Date().getDate();
  if (currentDay === 31) {
    currentDay = 1;
  }
  dayEle.textContent = `${currentDay >= 10 ? currentDay : `0${currentDay}`}`;

  setTimeout(() => {
    changeDay();
  }, 1000);
}
changeDay();

// changeHour();
function changeHour() {
  let currentHour = new Date().getHours();
  if (currentHour >= 12) {
    currentHour -= 12;
  }
  hourEle.textContent = `${
    currentHour >= 10 ? currentHour : `0${currentHour}`
  }`;
  setTimeout(() => {}, 1000);
}
changeHour();

// changeMinute();
function changeMinute() {
  let currentMin = new Date().getMinutes();
  if (currentMin === 60) {
    currentMin = 0;
  }
  minEle.textContent = `${currentMin >= 10 ? currentMin : `0${currentMin}`}`;

  setTimeout(() => {
    changeMinute();
  }, 1000);
}
changeMinute();

function changeSecond() {
  let currentSec = new Date().getSeconds();
  if (currentSec === 60) {
    currentSec = 0;
  }
  secEle.textContent = `${currentSec >= 10 ? currentSec : `0${currentSec}`}`;

  setTimeout(() => {
    changeSecond();
  }, 1000);
}
changeSecond();
