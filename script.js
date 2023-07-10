function searchWeather(){
  search = searchBox.value;
  


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)

  .then(res => res.json())
  .then(data => weatherData(data))
  .catch(error => alert('Cannot fetch weather data'));
  
}

function weatherData(data){

  

  weatherMain = data.weather[0].main;
  weatherDesc = data.weather[0].description;
  temp = data.main.temp;
  tempFeelsLike = data.main.feels_like;
  sname = data.name;
  
  
  countryData = data.sys.country;
  pressureData = data.main.pressure;
  humidityData = data.main.humidity;
  windData = data.wind.speed;

  htmlData5 = `${temp}&deg;C`
  weather.innerHTML = htmlData5;

  htmlData6 = `Feels like ${tempFeelsLike}`
  temperature.innerHTML = htmlData6;

  htmlData7 = `Location Name: ${sname}`
  locationName.innerHTML = htmlData7;

  htmlData8 = `${weatherMain}`
  weatherType.innerHTML = htmlData8;

  htmlData9 = ` ${weatherDesc}`
  weatherDescription.innerHTML = htmlData9;

  htmlData1 = `Country: ${countryData}`
  country.innerHTML = htmlData1;

  htmlData2 = `Humidity: ${humidityData}%`
  humidity.innerHTML = htmlData2;

  htmlData3 = `Wind: ${windData} mps`
  wind.innerHTML = htmlData3;

  htmlData4 = `Pressure: ${pressureData} Pa`
  pressure.innerHTML = htmlData4;

}