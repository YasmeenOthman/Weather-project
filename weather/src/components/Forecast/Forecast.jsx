import React from "react";
import ForecastItem from "./ForecastItem";
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <div className="forecast-header">
        <h2>7 days Forecast</h2>
        <select className="forecast-select">
          <option value="7">7 day</option>
          <option value="14">14 day</option>
          <option value="30">30 day</option>
        </select>
      </div>
      <div className="forecast-list">
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <div className="forecast-detail">
          <div>
            <img
              src="../src/assets/icons/thunderstorm.png"
              alt="Weather"
              width={30}
              height={30}
            />
          </div>
          <div>
            <p className="forecast-label">Tomorrow</p>
            <span className="temp">23°</span>
            <p className="forecast-description">Thunder Storm day</p>
          </div>
          <div className="forecast-chart-placeholder">chart</div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
