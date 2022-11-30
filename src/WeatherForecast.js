import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function WeatherForecast(props) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "#D9D9D9",
    size: 32,
    animate: true,
  };

  let apiKey = "866a208a73eeff02182218e9441647a1";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `
    https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(apiUrl);
    console.log(response.data);
  }

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
