const apiKey = "1c2f17034e3646990422b80769f90b79";
const city = "delhi";
const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const obj = JSON.parse(this.response);
    document.getElementById("weather").innerHTML = obj.weather[0].description;
    document.getElementById("location").innerHTML = obj.name;
    document.getElementById("temp").innerHTML = Math.round(obj.main.temp - 273.15);
    document.getElementById("icon").src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
  } else {
    console.log("The city data is not available");
  }
};
request.send();
