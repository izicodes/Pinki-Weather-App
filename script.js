let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

const form = document.querySelector("form");
const cityNameInput = document.querySelector("#cityNameInput");
const CityTitle = document.querySelector("#CityTitle");
const date = document.querySelector("#date");
const enterBtn = document.querySelector("#enterBtn");
const currentTemp = document.querySelector("#currentTemp");
const changeMeasurement = document.querySelector("#changeMeasurement");
const cityBtns = document.querySelectorAll(".btnContainers input[type=btn]");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CityTitle.textContent = cityNameInput.value;
});

console.log(cityBtns);

cityBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        CityTitle.textContent = btn.value;
        cityNameInput.value = btn.value;
    });
});

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
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
    "December"
  ];
  

date.textContent = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getHours()}:${now
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

function changeTemp(t) {
  if (t === "celsius") {
    temp.textContent = "19";
  } else if (t === "f") {
    temp.textContent = "66.2";
  }
}

changeMeasurement.addEventListener("click", function() {
    let t = this.dataset.type;

    if (t === "celsius") {
        currentTemp.textContent = "66.2°";
        this.textContent = "°F";
        this.dataset.type = "fahrenheit";
      } else if (t === "fahrenheit") {
        currentTemp.textContent = "19°";
        this.textContent = "°C";
        this.dataset.type = "celsius";
      }
});