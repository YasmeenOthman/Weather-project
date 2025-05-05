import "./SmallCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function Humidity() {
  const { currentWeather } = useContext(WeatherContext);
  const humidity = currentWeather?.main?.humidity;

  return (
    <div className="humidity-card small-card">
      <div className="humidity-card-header small-card-header">
        <h3>Humidity</h3>
      </div>
      <div className="humidity-card-content small-card-content">
        <div className="humidity-card-content-header small-card-content-header">
          <p>{humidity}%</p>
        </div>
        {/* <div className="humidity-card-content-body small-card-content-body">
          <p>The dew point is {dewPoint}°C</p>
        </div> */}
      </div>
    </div>
  );
}

export default Humidity;
