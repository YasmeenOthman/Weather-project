import SunArc from "./SunArc";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { formatLocalTime } from "../../../../utils/time";

function SunriseCard() {
  const { currentWeather } = useContext(WeatherContext);

  const timezoneOffset = currentWeather?.timezone || 0;

  // Get raw timestamps (in seconds)
  const sunriseTimestamp = currentWeather?.sys?.sunrise ?? 0;
  const sunsetTimestamp = currentWeather?.sys?.sunset ?? 0;

  return (
    <div className="highlight-card sunrise-card main-card">
      <div className="main-card-header">
        <h3>Sunrise & Sunset</h3>
      </div>
      <div className="chart-wrapper">
        <SunArc
          sunriseTime={sunriseTimestamp * 1000} // convert to ms
          sunsetTime={sunsetTimestamp * 1000}
          sunriseLabel={formatLocalTime(sunriseTimestamp, timezoneOffset)}
          sunsetLabel={formatLocalTime(sunsetTimestamp, timezoneOffset)}
        />
      </div>
    </div>
  );
}
export default SunriseCard;
