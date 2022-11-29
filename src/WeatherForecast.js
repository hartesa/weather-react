import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherForecast(props) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 32,
    animate: true,
  };

  return (
    <div className="WeatherForecast flex-container">
      <div className="flex-item">
        <div className="weather-forecast-date">Thu</div>
        <div className="forecastWeatherEmoji">
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        {/* <img
          className="forecastWeatherEmoji"
          src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
          alt="Weather icon"
        /> */}
        <div className="weather-forecast-temp">
          <span className="weather-forecast-temp-min">3°</span>-
          <span className="weather-forecast-temp-max">8°</span>
        </div>
      </div>
    </div>
  );
}
