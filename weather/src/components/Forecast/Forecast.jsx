// src/components/Forecast/Forecast.jsx
import "./Forecast.css";

const mockForecast = [
  { day: "Saturday", date: "25 July", temp: "29° / 18°", icon: "🌦️" },
  { day: "Sunday", date: "25 July", temp: "29° / 18°", icon: "🌦️" },
  { day: "Monday", date: "25 July", temp: "29° / 18°", icon: "🌦️" },
  { day: "Tuesday", date: "26 July", temp: "21° / 16°", icon: "🌧️" },
  { day: "Wednesday", date: "27 July", temp: "24° / 20°", icon: "☁️" },
  { day: "Thursday", date: "28 July", temp: "30° / 17°", icon: "🌤️" },
  { day: "Friday", date: "29 July", temp: "30° / 17°", icon: "🌤️" },
];

function Forecast() {
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
        {mockForecast.map((item, index) => (
          <div className="forecast-item" key={index}>
            <div className="forecast-temp">
              <span>{item.icon}</span>
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
