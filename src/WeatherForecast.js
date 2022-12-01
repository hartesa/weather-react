import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.weatherData.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast flex-container">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="flex-item" key={index}>
                <WeatherForecastDay forecast={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    // let apiKey = "866a208a73eeff02182218e9441647a1";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.weatherData.coordinates.lon;
    let latitude = props.weatherData.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
