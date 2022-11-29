import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [city, setCity] = useState();
  let [weatherData, setWeatherData] = useState({
    city: "Jakarta",
    currentTemp: 23,
    currentWeatherImage:
      "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    description: "Cloudy as shit",
    clouds: 43,
    humidity: 32,
    wind: 12,
  });
  let [temperature, setTemperature] = useState(20);
  let [unitTemp, setUnitTemp] = useState("C");
  let [tempFButton, setTempFButton] = useState(
    <button
      type="button"
      className="temp-button tempF"
      onClick={showFahrenheit}
    >
      °F
    </button>
  );
  let [tempCButton, setTempCButton] = useState(
    <button type="button" className="temp-button tempC">
      °C
    </button>
  );

  let now = new Date();
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = Days[now.getDay()] + " - ";
  let currentTime = addZero(now.getHours()) + ":" + addZero(now.getMinutes());

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function inputCity(event) {
    event.preventDefault();
    const apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
    let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiCityUrl).then(getUrl);
  }

  function getUrl(response) {
    let weather = response.data.weather[0].description;
    setUnitTemp("C");
    setTemperature(Math.round(response.data.main.temp));
    if (weather === "clear sky") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/sunny.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "few clouds") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/sunny_s_cloudy.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "scattered clouds") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "broken clouds") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/cloudy.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "thunderstorm") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "snow") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/snow.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather === "mist") {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/mist.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather.includes("clouds")) {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else if (weather.includes("rain")) {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/rain_light.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    } else {
      setWeatherData({
        city: `${city}`,
        country: response.data.sys.country,
        currentTemp: Math.round(response.data.main.temp),
        currentWeatherImage:
          "https://ssl.gstatic.com/onebox/weather/256/cloudy.png",
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    }

    setTempFButton(
      <button
        type="button"
        className="temp-button tempF"
        onClick={showFahrenheit}
      >
        °F
      </button>
    );

    setTempCButton(
      <button type="button" className="temp-button tempC">
        °C
      </button>
    );

    console.log(unitTemp);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((temperature * 9) / 5 + 32));
    setUnitTemp("F");
    setTempFButton(
      <button type="button" className="temp-button tempC">
        °F
      </button>
    );
    setTempCButton(
      <button type="button" className="temp-button tempF" onClick={showCelsius}>
        °C
      </button>
    );
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(weatherData.currentTemp);
    setUnitTemp("C");
    setTempFButton(
      <button
        type="button"
        className="temp-button tempF"
        onClick={showFahrenheit}
      >
        °F
      </button>
    );
    setTempCButton(
      <button type="button" className="temp-button tempC" onClick={showCelsius}>
        °C
      </button>
    );
  }

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
                  src={weatherData.currentWeatherImage}
                  alt="Weather icon"
                />
                <br />
                <span id="current-weather">{weatherData.description}</span>
                <br /> clouds:{" "}
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

                <WeatherForecast description={weatherData.description} />

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
              <i class="fa-brands fa-github github-icon" alt="github"></i>
              <span> </span>
              <a
                href="https://github.com/hartesa/weather-react"
                target="_blank"
                class="github-link"
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
}
