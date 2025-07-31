const apiKey = "1c2f17034e3646990422b80769f90b79";
let currentCity = "Delhi"; // Default city

window.onload = function () {
  getWeather(currentCity);
};

function getWeather(cityName = "") {
  const cityInput = document.getElementById("cityInput").value.trim();
  const city = cityName || cityInput || currentCity;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(link)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      currentCity = data.name;
      document.getElementById("weather").innerText = data.weather[0].description;
      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText = Math.round(data.main.temp - 273.15);
      document.getElementById("icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch(error => {
      alert("City not found. Please enter a valid city name.");
      console.error(error);
    });
}

function refreshWeather() {
  getWeather(currentCity);
}
