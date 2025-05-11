import "./SmallCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { WiHumidity } from "react-icons/wi";

function Humidity() {
  const { currentWeather } = useContext(WeatherContext);
  const humidity = currentWeather?.main?.humidity;

  return (
    <div className="humidity-card small-card">
      <div className="humidity-card-header small-card-header">
        <h3>Humidity</h3>
      </div>
      <div className="small-card-content">
        <WiHumidity className="card-icon" />

        <div>
          <p>{humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
