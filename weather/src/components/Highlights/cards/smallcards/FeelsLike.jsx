import "./SmallCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { CiTempHigh } from "react-icons/ci";

function FeelsLike() {
  const { currentWeather } = useContext(WeatherContext);
  const feelsLike = currentWeather?.main?.feels_like;

  return (
    <div className="feels-like-card small-card">
      <div className="small-card-header">
        <h3>Feels Like</h3>
      </div>
      <div className="small-card-content">
        <CiTempHigh className="card-icon" />
        <div>
          <p>{feelsLike}°C</p>
        </div>
      </div>
    </div>
  );
}

export default FeelsLike;
