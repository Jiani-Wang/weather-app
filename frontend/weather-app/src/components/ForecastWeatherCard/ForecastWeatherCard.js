// src/components/ForecastWeatherCard/ForecastWeatherCard.js
import React from "react";
import "./ForecastWeatherCard.css";

function ForecastWeatherCard({ foreCastData }) {
  return (
    <div className="forecast-container">
      <h3 className="forecast-title">FORECAST WEATHER</h3>
      <div className="forecast-grid">
        {foreCastData.map((day, index) => (
          <div className="forecast-card" key={index}>
            <div className={`forecast-day ${index === 1 ? "highlight" : ""}`}>
              {day.day}
            </div>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="weather icon"
              className="forecast-icon"
            />

            <div className="forecast-temp">
              <span>{Math.round(day.max)}°</span>{" "}
              <span>{Math.round(day.min)}°</span>
            </div>

            <div className="forecast-pop">💧 {day.pop}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastWeatherCard;
