// src/components/WeatherCard/WeatherCard.jsx
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="search-bar">
        <input type="text" placeholder="Search city..." />
        <button>🔍</button>
      </div>
      <div className="weather-top">
        <div className="weather-icon-container">
          <img
            src="https://openweathermap.org/img/wn/11d@2x.png"
            alt="Weather Icon"
            className="weather-icon"
          />
        </div>
        <div className="temperature">28°C</div>
        <div className="weather-description-container">
          <p className="weather-description">Rainy Storm Clouds</p>
        </div>
      </div>

      <div className="weather-info">
        <p className="location">Florida, US</p>
        <p className="datetime">24 July, 2022 5:01 AM</p>
      </div>
    </div>
  );
}

export default WeatherCard;
