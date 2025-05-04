import React from "react";

const ForecastItem = () => {
  return (
    <div className="forecast-item">
      <img
        src="../src/assets/icons/thunderstorm.png"
        alt="Weather"
        className="forecast-icon"
        width={30}
        height={30}
      />
      <div className="forecast-temp">
        <span className="high-temp">+29°</span>/
        <span className="low-temp">+18°</span>
      </div>
      <div className="forecast-date">
        <span className="day">25 July,</span>
        <span className="weekday">Tuesday</span>
      </div>
    </div>
  );
};

export default ForecastItem;
