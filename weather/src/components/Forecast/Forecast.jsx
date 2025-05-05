// src/components/Forecast/Forecast.jsx
import "./Forecast.css";
import { useContext, useMemo } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function Forecast() {
  const { forecast } = useContext(WeatherContext);

  // Group and summarize forecast data by day
  const dailyForecast = useMemo(() => {
    // If forecast data is not available, return an empty array
    if (!forecast?.list) return [];

    const days = {}; // Object to group forecast entries by day

    forecast.list.forEach((item) => {
      // Convert Unix timestamp to JavaScript Date object
      const date = new Date(item.dt * 1000);

      // Create a string key for the day (e.g., "Monday, 28 Apr")
      const dayStr = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
      console.log(dayStr);
      // Initialize this day's entry in the 'days' object if it doesn't exist yet
      if (!days[dayStr]) {
        days[dayStr] = {
          // Store the day name and date separately for display
          day: date.toLocaleDateString("en-US", { weekday: "long" }),
          date: date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          }),
          temps: [], // To store temperatures for each 3-hour segment
          icons: [], // To store weather icons for each 3-hour segment
        };
      }

      // Push current forecast data into the appropriate day group
      days[dayStr].temps.push(item.main.temp);
      days[dayStr].icons.push(item.weather[0].icon);
    });

    // Transform the 'days' object into an array of summarized daily forecast objects
    return Object.values(days).map((day) => {
      // Calculate max and min temperature for the day
      const max = Math.round(Math.max(...day.temps));
      const min = Math.round(Math.min(...day.temps));

      // Return a formatted summary object for each day
      return {
        day: day.day, // e.g., "Monday"
        date: day.date, // e.g., "28 Apr"
        temp: `${max}° / ${min}°`, // e.g., "25° / 17°"
        icon: `https://openweathermap.org/img/wn/${day.icons[0]}@2x.png`, // use the first icon
      };
    });
  }, [forecast]); // Re-run only when forecast changes
  console.log(dailyForecast);
  return (
    <div className="forecast-container">
      {/* Header with dropdown */}
      <div className="forecast-header">
        <h2>7 days Forecast</h2>
        <select className="forecast-select">
          <option value="7">7 day</option>
          <option value="5">5 day</option>
          <option value="3">3 day</option>
        </select>
      </div>

      {/* Forecast list */}
      <div className="forecast-list">
        {dailyForecast.map((item, index) => (
          <div className="forecast-item" key={index}>
            <div className="forecast-temp">
              <img
                src={item.icon}
                alt="weather icon"
                className="forecast-icon"
              />
              <span>{item.temp}</span>
            </div>
            <div className="forecast-date">
              <div>{item.date}</div>
              <div>{item.day}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tomorrow special card */}

      <div className="tomorrow-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
          alt="storm icon"
          className="tomorrow-icon"
        />
        <div className="tomorrow-card-content">
          <div className="tomorrow-label">Tomorrow</div>
          <div className="tomorrow-temp">23°</div>
          <div className="tomorrow-description">Thunder Storm Day</div>
        </div>

        <div className="tomorrow-chart">
          {/* Add a chart image or react-chart if needed */}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
