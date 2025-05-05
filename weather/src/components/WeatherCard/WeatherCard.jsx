// src/components/WeatherCard/WeatherCard.jsx
import { useState, useEffect, useContext } from "react";
import { fetchCurrentWeather } from "../../services/weatherService";
import { WeatherContext } from "../../context/WeatherContext";
import "./WeatherCard.css";

function WeatherCard() {
  const { currentWeather, setCity, error } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  // handle change
  const handleChange = (e) => setInput(e.target.value);

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) setCity(input.trim());
  };

  return (
    <div className="weather-card">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={handleChange}
        />
        <button type="submit">🔍</button>
      </form>

      {/* error */}

      {error && <p className="error-message">{error}</p>}

      {/* weather */}

      {currentWeather && (
        <>
          <div className="weather-top">
            <div className="weather-icon-container">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="weather-icon"
              />
            </div>
            <div className="temperature">
              {Math.round(currentWeather.main.temp)}°C
            </div>
            <div className="weather-description-container">
              <p className="weather-description">
                {currentWeather.weather[0].description}
              </p>
            </div>
          </div>

          <div className="weather-info">
            <p className="location">
              {currentWeather.name}, {currentWeather.sys.country}
            </p>
            <p className="datetime">
              {new Date(currentWeather.dt * 1000).toLocaleTimeString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
