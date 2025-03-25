import "./App.css";
import WeatherMainContainer from "./components/WeatherMainContainer/WeatherMainContainer";
import Header from "./components/Header/Header";
import React, { useState } from "react";

function App() {
  const [currentCity, setCurrentCity] = useState("Sydney");

  return (
    <>
      <Header onSelectCity={(city) => setCurrentCity(city)} />

      <div className="App">
        <WeatherMainContainer currentCity={currentCity} />
      </div>
    </>
  );
}

export default App;
