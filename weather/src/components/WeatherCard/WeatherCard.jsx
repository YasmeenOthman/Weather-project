// src/components/WeatherCard/WeatherCard.jsx
import { useState, useEffect, useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

import { WeatherContext } from "../../context/WeatherContext";
import { CiSearch } from "react-icons/ci";
import { formatLocalTime, formatLocalDateTime } from "../../utils/time";
import "./WeatherCard.css";

function WeatherCard() {
  const { currentWeather, setCity, setCoords, setUseCoords, error } =
    useContext(WeatherContext);
  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  // handle change
  const handleChange = (e) => setInput(e.target.value);

  // handle toggle input
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!isClicked) {
      // Step 1: Show the input field
      setIsClicked(true);
    } else if (input.trim()) {
      // Step 2: Search and hide input field
      setUseCoords(false); // <--- new
      setCity(input.trim());
      setIsClicked(false);
      setInput(""); // optionally reset the input
    }
  };

  return (
    <div className="weather-card">
      <form className={`search-bar ${isClicked ? "show" : ""}`}>
        <input
          type="search"
          placeholder="Search city..."
          value={input}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleButtonClick}>
          <CiSearch className="search-icon" />
        </button>
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
            <div className="weather-info-location">
              <IoLocationOutline />
              <p className="location">
                {currentWeather.name}, {currentWeather.sys.country}
              </p>
            </div>
            <div className="weather-info-date-time">
              <LuCalendarDays />
              <p className="datetime">
                {formatLocalDateTime(
                  currentWeather.dt,
                  currentWeather.timezone
                )}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
