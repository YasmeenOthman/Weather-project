import SunArc from "./SunArc"; // Import it here
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { formatLocalTime } from "../../../../utils/time";
function SunriseCard() {
  const { currentWeather } = useContext(WeatherContext);

  const timezoneOffset = currentWeather?.timezone || 0;

  const sunriseTime = formatLocalTime(
    currentWeather?.sys?.sunrise,
    timezoneOffset
  );
  const sunsetTime = formatLocalTime(
    currentWeather?.sys?.sunset,
    timezoneOffset
  );

  return (
    <div className="highlight-card sunrise-card main-card">
      <div className="main-card-header">
        <h3>Sunrise & Sunset</h3>
      </div>
      <div className="chart-wrapper">
        <SunArc sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
      </div>
    </div>
  );
}
export default SunriseCard;
