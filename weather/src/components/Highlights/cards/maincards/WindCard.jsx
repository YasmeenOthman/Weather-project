// src/components/Highlights/WindCard.jsx
import "./MainCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function WindCard() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className="highlight-card wind-card main-card">
      <h3>Wind</h3>
      <p className="wind-speed">{currentWeather?.wind?.speed} km/h</p>
      <p className="wind-direction">{currentWeather?.wind?.deg}°</p>
    </div>
  );
}

export default WindCard;
