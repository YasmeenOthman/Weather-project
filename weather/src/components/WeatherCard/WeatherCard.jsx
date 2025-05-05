// src/components/WeatherCard/WeatherCard.jsx
import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../services/weatherService";
import "./WeatherCard.css";

function WeatherCard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchCurrentWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchCurrentWeather("Palestine");
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    getWeather();
  }, []);

  return (
    <div className="weather-card">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search city..."
          onChange={handleChange}
        />
        <button type="submit">🔍</button>
      </form>
      <div className="weather-top">
        <div className="weather-icon-container">
          <img
            src="https://openweathermap.org/img/wn/11d@2x.png"
            alt="Weather Icon"
            className="weather-icon"
          />
        </div>
        <div className="temperature">
          {weatherData && weatherData.main.temp}°C
        </div>
        <div className="weather-description-container">
          <p className="weather-description">
            {weatherData && weatherData.weather[0].description}
          </p>
        </div>
      </div>

      <div className="weather-info">
        <p className="location">
          {weatherData && weatherData.name},{" "}
          {weatherData && weatherData.sys.country}
        </p>
        <p className="datetime">
          {new Date(weatherData && weatherData.dt * 1000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
