import "./SmallCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function FeelsLike() {
  const { currentWeather } = useContext(WeatherContext);
  const feelsLike = currentWeather?.main?.feels_like;
  const dewPoint = currentWeather?.main?.dew_point;

  return (
    <div className="feels-like-card small-card">
      <div className="feels-like-card-header small-card-header">
        <h3>Feels Like</h3>
      </div>
      <div className="feels-like-card-content small-card-content">
        <div className="feels-like-card-content-header">
          <p>{feelsLike}°C</p>
        </div>
        {/* <div className="feels-like-card-content-body small-card-content-body">
          <p>The dew point is {dewPoint}°C</p>
        </div> */}
      </div>
    </div>
  );
}

export default FeelsLike;
