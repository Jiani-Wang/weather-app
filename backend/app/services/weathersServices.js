const axios = require('axios');
const app = require('../config/app');

exports.getWeatherByCity = async (cityName) => {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${app.openweatherApiKey}`;

  const geoResp = await axios.get(geoUrl);
  const geoData = geoResp.data;
  if (!geoData || geoData.length === 0) {
    throw new Error(`City not found: ${cityName}`);
  }

  const { lat, lon } = geoData[0];

  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${app.openweatherApiKey}&units=metric`;
  const weatherResp = await axios.get(forecastUrl);
  const forecastData = weatherResp.data;  

  const todayItem = forecastData.list[0];
  const today = {
    name: forecastData.city.name,
    temp: todayItem.main.temp,
    feelsLike: todayItem.main.feels_like,
    maxTemp: todayItem.main.temp_max,
    minTemp: todayItem.main.temp_min,
    desc: todayItem.weather[0].description,
    icon: todayItem.weather[0].icon,
    wind: `${todayItem.wind.speed} m/s`, 
    humidity: todayItem.main.humidity,
    pop: Math.round(todayItem.pop * 100),
    rainfall: `${todayItem.rain?.["3h"] ?? 0} mm`,
  };


  const todayDate = new Date();
const tomorrowDate = new Date(todayDate);
tomorrowDate.setDate(todayDate.getDate() + 1);

const forecast = forecastData.list
  .filter(item => {
    const date = new Date(item.dt_txt);
    return (
      item.dt_txt.includes("12:00:00") &&
      date.getDate() !== todayDate.getDate()
    );
  })
  .map(item => {
    const date = new Date(item.dt_txt);

    let day;
    if (
      date.getDate() === tomorrowDate.getDate() &&
      date.getMonth() === tomorrowDate.getMonth()
    ) {
      day = "Tomorrow";
    } else {
      day = date.toLocaleDateString("en-US", { weekday: "long" });
    }

    return {
      day,
      max: Math.round(item.main.temp_max),
      min: Math.round(item.main.temp_min),
      icon: item.weather[0].icon,
      pop: Math.round(item.pop * 100),
    };
  });

  const hourly = forecastData.list
  .filter((item, index) => {
    const forecastTime = new Date(item.dt_txt);
    const now = new Date();
    const hoursDiff = (forecastTime - now) / (1000 * 60 * 60);
    return hoursDiff >= 0 && hoursDiff <= 24;
  })
  .map((item, index) => {
    const time = index === 0 ? "Now" : new Date(item.dt_txt).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true
    });

    return {
      time,
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      pop: Math.round(item.pop * 100)
    };
  });

  return {
    today,
    forecast,
    hourly,
  };
};
