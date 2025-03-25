const { getWeatherByCity } = require('../services/weathersServices');

exports.fetchWeather = async (req, res) => {
    try {
      let cityName = req.query.city;
      if (!cityName) {
        cityName = "Sydney"; 
      }
  
      const data = await getWeatherByCity(cityName);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  };
