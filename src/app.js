
let now = new Date();
let date = now.getDate(timestamp);
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
;
return `${day} ${hours}:${minutes}`;
}



let form = document.querySelector("form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `<strong>${temperature}°</strong>`;
}

function searchTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text").value;
  let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchTemp);

