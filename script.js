/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key
 try {
    const response = await fetch(FULL_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
}


const searchCity =async () => {
  const city = document.getElementById('city-input').value;
 const data=await getWeatherData(city)
 showWeatherData(data)
}


const showWeatherData = (weatherData) => {
  const temp=document.getElementById('temp')
  temp.innerHTML=weatherData.main.temp
  const temp_min=document.getElementById('min-temp')
  temp_min.innerHTML=weatherData.main.temp_min
  const temp_max=document.getElementById('max-temp')
  temp_max.innerHTML=weatherData.main.temp_max
  const city=document.getElementById('city-name')
  city.innerHTML=weatherData.name
  const weather_type=document.getElementById('weather-type')
  weather_type.innerHTML=weatherData.weather[0].main

}
