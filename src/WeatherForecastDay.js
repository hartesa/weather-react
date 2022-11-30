import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherForecastDay(props) {
  const iconCodeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "10n": "RAIN",
    "10d": "RAIN",
    "09d": "SLEET",
    "09n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "11d": "WIND",
    "11n": "WIND",
    "50d": "FOG",
    "50n": "FOG",
  };

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <div className="forecastWeatherEmoji">
        <ReactAnimatedWeather
          icon={iconCodeMapping[props.forecast.weather[0].icon]}
          color={"burlywood"}
          //   color={"#D9D9D9"}
          size={32}
          animate={true}
          font-weight={100}
        />
      </div>
      <div className="weather-forecast-temp">
        <span className="weather-forecast-temp-min">
          {Math.round(props.forecast.temp.min)}°
        </span>
        -
        <span className="weather-forecast-temp-max">
          {Math.round(props.forecast.temp.max)}°
        </span>
      </div>
    </div>
  );
}
