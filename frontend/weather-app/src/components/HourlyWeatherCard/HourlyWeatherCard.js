import React from "react";
import "./HourlyWeatherCard.css";

function HourlyWeatherCard({ hourlyData }) {
  if (!hourlyData || hourlyData.length === 0) return null;

  return (
    <div className="hourly-container">
      <h3 className="hourly-title">HOURLY FORECAST</h3>
      <div className="hourly-scroll">
        {hourlyData.map((hour, index) => (
          <div className="hour-card" key={index}>
            <div className="hour-time">{hour.time}</div>
            <img
              src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt="icon"
              className="hour-icon"
            />
            <div className="hour-temp">{Math.round(hour.temp)}°</div>
            <div className="hour-pop">💧 {hour.pop}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyWeatherCard;
