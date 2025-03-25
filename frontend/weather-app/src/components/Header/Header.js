import React from "react";
import LocationSearch from "../LocationSearch/LocationSearch";
import "./Header.css";

function Header({ onSelectCity }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="weather-header">
      <div className="header-left">
        <h1>Weather App</h1>
        <div className="date-display">{formattedDate}</div>
      </div>

      <div className="header-right">
        <LocationSearch onSelectCity={onSelectCity} />
      </div>
    </header>
  );
}

export default Header;
