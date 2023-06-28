
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
	let months = [
    "Jan",
"Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
	let month = months[now.getMonth()];
let h2 = document.querySelector("h2");
h2.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}, ${year}`;


function displayForecast(response){
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

let forecastElement = "Hello";
forecastHTML = forecastHTML + `
  <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              Thu
              <br />
              <i class="fa-solid fa-sun"></i>
              <br />
              15°C
            </div>
            </div>
            </div>`

forecastElement.innerHTML = forecastHTML;


}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}



let form = document.querySelector("form");
form.addEventListener("submit", search);

function showTemperature(response) {
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#current-temp");
let countryElemnt=document.querySelector("#country");
let cityElement=document.querySelector("#city");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind");
let iconElement = document.querySelector("#icon-big-temp");



temperatureElement.innerHTML = `<strong>${temperature}°</strong>`;
 iconElement.setAttribute("src", `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=062ee53ba479dd4cf0o7c643141865td`); 
let key="062ee53ba479dd4cf0o7c643141865td";

cityElement.innerHTML=response.data.city;
countryElemnt.innerHTML=response.data.country;
humidityElement.innerHTML= response.data.temperature.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);

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

displayForecast();
