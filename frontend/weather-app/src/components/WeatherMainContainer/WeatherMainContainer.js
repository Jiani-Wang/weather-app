import React, { useState, useEffect } from "react";
import HourlyWeatherCard from "../HourlyWeatherCard/HourlyWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import Contact from "../Contact/Contact"; 
import "./WeatherMainContainer.css";
import { getWeather } from "../../api/backend";

function WeatherMainContainer({ currentCity }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  }, [currentCity]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await getWeather(cityName);
      setWeatherData(response.data); 
    } catch (err) {
      console.error(err);
    }
  };

  if (!weatherData) return null;

  const { today, forecast, hourly } = weatherData;

  return (
    <div className="weather-main-container">
      <TodayWeatherCard data={today} />
      <HourlyWeatherCard hourlyData={hourly} />
      <div className="weekly-section-wrapper">
        <ForecastWeatherCard foreCastData={forecast} />
        <Contact /> 
      </div>
    </div>
  );
}

export default WeatherMainContainer;
