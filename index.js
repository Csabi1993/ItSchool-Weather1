const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "Timișoara");
  currentCity = "Timișoara";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
