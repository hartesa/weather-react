import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Jakarta",
    day: "Tuesday",
    time: "10:00",
    currentTemp: 21,
    currentWeatherImage:
      "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    description: "Cloudy",
    clouds: 15,
    humidity: 50,
    wind: 10,
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <br />
          {/* <h1>
            WEATHER IN <span className="city">{weatherData.city}</span>
          </h1> */}

          <div id="inputForm">
            <form id="input-form">
              <input
                className="enter-city"
                type="text"
                id="inputCity"
                placeholder="enter a city"
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
                  <span id="current-day"> {weatherData.day} </span>
                  <span id="current-time"> {weatherData.time} </span>
                </span>
                <br />
                <span className="current-temp">
                  <span id="current-temp">{weatherData.currentTemp}</span>
                  <span id="temp-type">°C</span>
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
              <div className="col-8 right">
                <button type="button" className="today">
                  Today
                </button>
                <button type="button" className="week">
                  Week
                </button>
                <button type="button" className="temp-button tempF">
                  °F
                </button>
                <button type="button" className="temp-button tempC">
                  °C
                </button>

                <br />

                <div className="weather-forecast">
                  <div className="row">
                    <div className="col-2">
                      <div className="weather-forecast-date">Thu</div>
                      <img
                        className="forecastWeatherEmoji"
                        src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
                        alt="Weather icon"
                      />
                      <div className="weather-forecast-temp">
                        <span className="weather-forecast-temp-min">2°</span>-
                        <span className="weather-forecast-temp-max">18°</span>
                      </div>
                    </div>
                  </div>
                </div>
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
