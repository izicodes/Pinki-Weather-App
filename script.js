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
const c = document.querySelector("#C");
const temp = document.querySelector("#temp");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CityTitle.textContent = cityNameInput.value;
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

date.textContent = `${days[now.getDay()]} ${now.getHours()}:${now
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

f.addEventListener("click", () => changeTemp("f"));
c.addEventListener("click", () => changeTemp("c"));

function changeTemp(t) {
  if (t === "c") {
    temp.textContent = "19";
  } else if (t === "f") {
    temp.textContent = "66.2";
  }
}
