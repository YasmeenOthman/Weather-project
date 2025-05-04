import React from "react";
import ForecastItem from "./ForecastItem";
import "./Forecast.css";
import TomorrowCard from "./TomorrowCard";

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
          <TomorrowCard />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
