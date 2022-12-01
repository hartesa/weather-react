import React, {useState} from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherForecast from './WeatherForecast';

export default function Weather() {
  // let [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState({ready: false});
  const [weatherImage, setWeatherImage] = useState(null);
  const [temperature, setTemperature] = useState(20);
  const [unitTemp, setUnitTemp] = useState('C');
  const [tempFButton, setTempFButton] = useState(
      <button
        type="button"
        className="temp-button tempF"
        onClick={showFahrenheit}
      >
      °F
      </button>,
  );
  const [tempCButton, setTempCButton] = useState(
      <button type="button" className="temp-button tempC">
      °C
      </button>,
  );

  const now = new Date();
  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDay = Days[now.getDay()] + ' - ';
  const currentTime = addZero(now.getHours()) + ':' + addZero(now.getMinutes());

  function setCurrentCity() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
    function retrievePosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = '3bb0c822ffbf8d7d00af7f1e1a4032dc';
      const apiCoordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiCoordsUrl).then(getUrl);
      // function showInput(response) {
      //   setCity(response.data.name);
      // }
    }
  }

  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  // function searchCity() {
  //   const apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
  //   let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //   axios.get(apiCityUrl).then(getUrl);
  // }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function inputCity(event) {
    event.preventDefault();
    const apiKey = '3bb0c822ffbf8d7d00af7f1e1a4032dc';
    const apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiCityUrl).then(getUrl);
  }

  function getUrl(response) {
    const weather = response.data.weather[0].description;
    setUnitTemp('C');
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      currentTemp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      ready: true,
    });
    setTemperature(Math.round(response.data.main.temp));

    if (weather === 'clear sky') {
      setWeatherImage('https://ssl.gstatic.com/onebox/weather/256/sunny.png');
    } else if (weather === 'few clouds') {
      setWeatherImage(
          'https://ssl.gstatic.com/onebox/weather/256/sunny_s_cloudy.png',
      );
    } else if (weather === 'scattered clouds') {
      setWeatherImage(
          'https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png',
      );
    } else if (weather === 'broken clouds') {
      setWeatherImage('https://ssl.gstatic.com/onebox/weather/256/cloudy.png');
    } else if (weather === 'thunderstorm') {
      setWeatherImage(
          'https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png',
      );
    } else if (weather === 'snow') {
      setWeatherImage('https://ssl.gstatic.com/onebox/weather/256/snow.png');
    } else if (weather === 'mist') {
      setWeatherImage('https://ssl.gstatic.com/onebox/weather/256/mist.png');
    } else if (weather.includes('clouds')) {
      setWeatherImage(
          'https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png',
      );
    } else if (weather.includes('rain')) {
      setWeatherImage(
          'https://ssl.gstatic.com/onebox/weather/256/rain_light.png',
      );
    } else {
      setWeatherImage('https://ssl.gstatic.com/onebox/weather/256/cloudy.png');
    }
    setTempFButton(
        <button
          type="button"
          className="temp-button tempF"
          onClick={showFahrenheit}
        >
        °F
        </button>,
    );
    setTempCButton(
        <button type="button" className="temp-button tempC">
        °C
        </button>,
    );
    // setLoaded(true);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((temperature * 9) / 5 + 32));
    setUnitTemp('F');
    setTempFButton(
        <button type="button" className="temp-button tempC">
        °F
        </button>,
    );
    setTempCButton(
        <button type="button" className="temp-button tempF" onClick={showCelsius}>
        °C
        </button>,
    );
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(weatherData.currentTemp);
    setUnitTemp('C');
    setTempFButton(
        <button
          type="button"
          className="temp-button tempF"
          onClick={showFahrenheit}
        >
        °F
        </button>,
    );
    setTempCButton(
        <button type="button" className="temp-button tempC" onClick={showCelsius}>
        °C
        </button>,
    );
  }

  if (weatherData.ready) {
    console.log(weatherData);
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app">
            <br />
            {/* <h1>
            WEATHER IN <span className="city">{weatherData.city}</span>
          </h1> */}

            <div id="inputForm">
              <form id="input-form" onSubmit={inputCity}>
                <input
                  className="enter-city"
                  type="text"
                  id="inputCity"
                  placeholder="enter a city"
                  onChange={changeCity}
                />
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
                <button type="submit" className="btn btn-secondary">
                  Current
                </button>
              </form>
            </div>
            <hr id="hr1" />

            <div className="container">
              <div className="row">
                <div className="col-4 left">
                  <div className="current-city">
                    {weatherData.city.toUpperCase()}
                  </div>
                  <span id="current-day-time">
                    <span id="current-day"> {currentDay} </span>
                    <span id="current-time"> {currentTime} </span>
                  </span>
                  <br />
                  <span className="current-temp">
                    <span id="current-temp">{temperature}</span>
                    <span id="temp-type">°{unitTemp}</span>
                  </span>
                  <br />
                  <img
                    className="currentWeatherEmoji"
                    src={weatherImage}
                    alt="Weather icon"
                  />
                  <br />
                  <span id="current-weather">{weatherData.description}</span>
                  <br /> clouds:{' '}
                  <span id="precipitation">{weatherData.clouds}</span>%<br />
                  humidity: <span id="humidity">{weatherData.humidity}</span>%
                  <br />
                  wind: <span id="wind">{weatherData.wind}</span> km/h
                </div>
                <div className="col-8">
                  <div className="right">
                    <button type="button" className="today">
                      Today
                    </button>
                    <button type="button" className="week">
                      Week
                    </button>
                  </div>
                  {tempFButton}

                  {tempCButton}

                  <br />

                  <WeatherForecast weatherData = {weatherData} />

                  <br />
                  <hr id="hr2" />
                  <div className="row" id="city-image-overlay">
                    <img
                      id="city-image"
                      src="https://assets.weforum.org/article/image/large_oJiIJtxAsQSP1eYnpNTTIMzjYoCmJo1oiC1mx2jWlN4.jpg"
                      alt="City"
                      rel="noreferrer"
                    />
                  </div>
                  <span id="country-city">Country/City</span>
                </div>
              </div>

              <div className="afternote">
                <i className="fa-brands fa-github github-icon" alt="github"></i>
                <span> </span>
                <a
                  href="https://github.com/hartesa/weather-react"
                  target="_blank"
                  className="github-link"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
                <span> </span>
                by Hartesa ©2022
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    setCurrentCity();
    return null;
  }
}
