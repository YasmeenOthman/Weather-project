import React from "react";
import "./WeatherMap.css";

const WeatherMap = () => {
  return (
    <div className="weather-map">
      <div className="weather-map-header">
        <h2>Weather condition map</h2>
      </div>

      <div className="weather-map-legend">
        <span>Precipitation</span>
        <div className="legend-bar">
          <div className="legend extreme" />
          <div className="legend heavy" />
          <div className="legend moderate" />
          <div className="legend light" />
        </div>
        <div className="legend-labels">
          <span>Extreme</span>
          <span>Heavy</span>
          <span>Moderate</span>
          <span>Light</span>
        </div>
      </div>

      <div className="weather-map-view">
        <div className="map-overlay">
          <div className="city-weather" style={{ top: "30%", left: "25%" }}>
            <img src="../src/assets/icons/thunderstorm.png" alt="cloud" />
            <span>23°</span>
          </div>
          <div className="city-weather" style={{ top: "50%", left: "60%" }}>
            <p className="city-name">California</p>
            <span className="main-temp">21°</span>
            <div className="city-details">
              <span>💨 15 km/h</span>
              <span>💧 90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMap;
