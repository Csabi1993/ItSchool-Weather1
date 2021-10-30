const API_KEY = "49f9e15ae417d22e8aa2a6276747eec9";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}
