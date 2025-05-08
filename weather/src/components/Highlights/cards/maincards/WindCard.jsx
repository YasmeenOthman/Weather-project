// src/components/Highlights/WindCard.jsx
import "./MainCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { PiWindThin } from "react-icons/pi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WindCard() {
  const { currentWeather, forecast } = useContext(WeatherContext);

  // Prepare wind data (e.g., next 8 data points, usually 3-hourly)
  const windData = forecast?.list?.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    speed: item.wind.speed,
  })) || [
    {
      time: "Now",
      speed: currentWeather?.wind?.speed || 0,
    },
  ];

  return (
    <div className="highlight-card wind-card main-card">
      <h3>Wind Status</h3>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={windData}>
            <Line
              type="monotone"
              dataKey="speed"
              stroke="#2c5364"
              strokeWidth={2}
              margin={{ left: 0 }}
            />
            <XAxis dataKey="time" tick={{ fill: "#ccc", fontSize: 10 }} />
            <YAxis
              domain={["auto", "auto"]} // Automatically adjusts to min/max wind speeds
              tick={{ fill: "#ccc", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
            />
            <CartesianGrid
              stroke="#444"
              strokeDasharray="3 3"
              vertical={false}
            />

            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="main-card-value">
        <PiWindThin className="wind-icon" />
        <span>{currentWeather?.wind?.speed} </span>
        <span className="main-card-label">km/h</span>
      </div>
    </div>
  );
}

export default WindCard;
