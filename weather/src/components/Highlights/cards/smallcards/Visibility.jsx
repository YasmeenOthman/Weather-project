import "./SmallCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function Visibility() {
  const { currentWeather } = useContext(WeatherContext);
  const visibility = currentWeather?.visibility;
  const visibilityInMiles = (visibility / 1609.34).toFixed(2);
  const visibilityInKm = (visibility / 1000).toFixed(2);
  return (
    <div className="visibility-card small-card">
      <div className="visibility-card-header small-card-header">
        <h3>Visibility</h3>
      </div>
      <div className="visibility-card-content small-card-content">
        <div className="visibility-card-content-header small-card-content-header">
          <p>
            {visibilityInMiles} mi / {visibilityInKm} km{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Visibility;
