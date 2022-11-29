import React from "react";
import "./Weather.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast flex-container">
      <div className="flex-item">
        <div className="weather-forecast-date">Thu</div>
        <img
          className="forecastWeatherEmoji"
          src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
          alt="Weather icon"
        />
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-min">3°</span>-
          <span className="weather-forecast-temp-max">8°</span>
        </div>
      </div>
    </div>
  );
}
