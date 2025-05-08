import SunArc from "./SunArc"; // Import it here
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";

function SunriseCard() {
  const { currentWeather } = useContext(WeatherContext);

  const sunrise = new Date(currentWeather?.sys?.sunrise * 1000);
  const sunset = new Date(currentWeather?.sys?.sunset * 1000);

  const sunriseTime = sunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunsetTime = sunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="highlight-card sunrise-card main-card">
      <h3>Sunrise & Sunset</h3>
      <SunArc sunrise={sunrise} sunset={sunset} />
      <div className="sun-times main-card-content">
        <div className="sun-time main-card-content-item">
          <span className="label">Sunrise:</span>
          <span className="value">{sunriseTime}</span>
        </div>
        <div className="sun-time main-card-content-item">
          <span className="label">Sunset:</span>
          <span className="value">{sunsetTime}</span>
        </div>
      </div>
    </div>
  );
}
export default SunriseCard;
