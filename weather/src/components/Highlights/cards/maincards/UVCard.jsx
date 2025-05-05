// src/components/Highlights/UVCard.jsx
import "./MainCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function UVCard() {
  return (
    <div className="main-card uv-card">
      <h3>UV Index</h3>
      <p className="uv-value main-card-value">233</p>
      <p className="uv-label main-card-label">Moderate</p>
    </div>
  );
}

export default UVCard;
