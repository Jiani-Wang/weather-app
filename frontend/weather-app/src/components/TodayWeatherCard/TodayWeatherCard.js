import "./TodayWeatherCard.css";

function TodayWeatherCard({ data }) {
  const {
    name,
    temp,
    feelsLike,
    maxTemp,
    minTemp,
    humidity,
    wind,
    desc,
    icon,
    pop,
    rainfall,
  } = data;

  return (
    <div className="today-card-container">
      <div className="today-card-header">
        <h2>{name} WEATHER</h2>
      </div>

      <div className="today-card-content">
        <div className="left">
          <div className="icon-temp-row">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather icon"
            />
            <div className="temperature">{Math.round(temp)}°</div>
          </div>
          <div className="desc">{desc}</div>
        </div>

        <div className="right">
          {/* 顶部三列温度 */}
          <div className="row-top">
            <div>
              <div className="label">Feels like</div>
              <div className="value">{Math.round(feelsLike)}°</div>
            </div>
            <div>
              <div className="label" style={{ color: "red" }}>
                Max
              </div>
              <div className="value">{Math.round(maxTemp)}°</div>
            </div>
            <div>
              <div className="label" style={{ color: "blue" }}>
                Min
              </div>
              <div className="value">{Math.round(minTemp)}°</div>
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-left">
              <div>🌧️ Rain chance: {pop}%</div>
              <div>💧 Rainfall: {rainfall}</div>
            </div>
            <div className="weather-detail-right">
              <div>💨 Wind: {wind}</div>
              <div>💦 Humidity: {humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeatherCard;
