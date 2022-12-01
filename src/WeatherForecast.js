import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  // let [longitude, setLongitude] = useState(null);
  // let [latitude, setLatitude] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    // setLongitude(response.data.lon);
    // setLatitude(response.data.lat);
  }

  if (loaded) {
    // console.log(forecast);
    // console.log(props.weatherData);
    // let iconCode = forecast[0].weather[0].icon;
    return (
      <div className="WeatherForecast flex-container">
        {forecast.map((dailyForecast, index) => {
          if (index > 0 && index < 6) {
            return (
              <div className="flex-item" key={index}>
                <WeatherForecastDay forecast={dailyForecast} />
              </div>
            );
          }
        })}
        {/* <div className="flex-item">
          <WeatherForecastDay forecast={forecast[1]} />
        </div>
        <div className="flex-item">
          <WeatherForecastDay forecast={forecast[2]} />
        </div>
        <div className="flex-item">
          <WeatherForecastDay forecast={forecast[3]} />
        </div>
        <div className="flex-item">
          <WeatherForecastDay forecast={forecast[4]} />
        </div>
        <div className="flex-item">
          <WeatherForecastDay forecast={forecast[5]} />
        </div>
        <div className="flex-item">
          <WeatherForecastDay forecast={forecast[6]} />
        </div> */}
      </div>
    );
  } else {
    console.log("masuk weatherforecast");
    // let apiKey = "866a208a73eeff02182218e9441647a1";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.weatherData.coordinates.lon;
    let latitude = props.weatherData.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
