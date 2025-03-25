import React, { useState, useEffect } from "react";
import HourlyWeatherCard from "../HourlyWeatherCard/HourlyWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import "./WeatherMainContainer.css";
import { getWeather } from "../../api/backend";
import { Github, Linkedin } from "lucide-react";

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
      setWeatherData(response.data); // { today: {...}, forecast: [...] }
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
        <div className="contact-box">
          <h4>Contact:</h4>
          <div className="social-icons">
            <a
              href="https://github.com/Jiani-Wang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jiani-wang-8070752a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherMainContainer;
