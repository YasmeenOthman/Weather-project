// src/components/Highlights/WindCard.jsx
import "./MainCard.css";
import { useContext } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
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
  console.log(windData);

  return (
    <div className="highlight-card wind-card main-card">
      <h3>Wind speed</h3>
      <div className="main-card-value">{currentWeather?.wind?.speed} km/h</div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={windData}>
            <Line
              type="monotone"
              dataKey="speed"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <XAxis dataKey="time" tick={{ fill: "#ccc", fontSize: 10 }} />
            <YAxis
              domain={["auto", "auto"]} // Automatically adjusts to min/max wind speeds
              tick={{ fill: "#ccc", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
            />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WindCard;
