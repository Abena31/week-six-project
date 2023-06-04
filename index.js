function recentDate(gDate){

  
  let hours= gDate.getHours();
  if (hours< 11){
    hours='0${hours}'
  }
  let minutes = gDate.getMinutes();
  if (minutes< 11){
    hours='0${mintues}'
  
  let dayGold = gDate.getDay();
  let days=["Sunday","Monday"," Tuesday", "Wednesday","Thursday","Friday","Saturday"]
let day= days[dayGold]; 
return'${days[dayGold]}${hours}:${minutes}';

}
function displayWeatherCondition(response){
  document.querySelector("#city").innerHTML=response.data.name;
  document.querySelector("#temperature ").innerHTML= Math.round (response.data.main.temp);
  document.querySelector("#humidity").innerHTML= response.data.main.humidity;
  document.querySelector("wind").innerHTML= Math.round(response.data.wind.speed);
  document.querySelector("description").innerHTML= response.data.weather[0].main;

}
function freshCity(city){
  let apiKey = "79e8e44340f805883833d9a47487d24b";
  let apiEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
  axios.get(apiEndpoint).then(displayWeatherCondition);

}

function localSearch(event){
  event.preventDefault();
  let city= document.querySelector("city slide").value;
freshCity(city);

}

function possibleCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  }

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 30;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 52;
}

let nowdateElement=document.querySelector("#nowdate");
let currentTime= new Date();
dateElement.innerHTML=FormDate("#currentTime");
let searchForm.document.querySelector("#search-form");
searchForm.addEventlistener("sumbit",localSearch);

let currentLocation =document.querySelector("#current");
currentLocation.addEventlistener("click",possibleCurrentLocation);



freshCity("New York");