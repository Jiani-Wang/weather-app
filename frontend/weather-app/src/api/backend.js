import axios from "axios";

export const getWeather = (cityName) => {
  return axios.get(`http://localhost:8080/api/v1/weather?city=${cityName}`);
};
