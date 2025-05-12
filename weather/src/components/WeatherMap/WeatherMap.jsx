import React, { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import {
  fetchCurrentWeather,
  fetchWeatherByCoords,
} from "../../services/weatherService";
import { WeatherContext } from "../../context/WeatherContext";
import "leaflet/dist/leaflet.css";
import "./WeatherMap.css";

// ✅ Fix for missing marker icons in Vite/Webpack setups
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

const WeatherMap = () => {
  const { coords, city } = useContext(WeatherContext);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (city) {
          const data = await fetchCurrentWeather(city);
          setWeatherData(data);
        } else if (coords) {
          const data = await fetchWeatherByCoords(coords.lat, coords.lon);
          setWeatherData(data);
        }
      } catch (err) {
        console.error("Failed to fetch weather data for map:", err);
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [city, coords]);

  // 🗺️ Determine Map Center
  const center = weatherData
    ? [weatherData.coord.lat, weatherData.coord.lon]
    : [31.9522, 35.2332]; // Default center (Amman or your choice)

  return (
    <div className="weather-map">
      <h2>Weather condition map</h2>
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {weatherData && (
          <Marker position={[weatherData.coord.lat, weatherData.coord.lon]}>
            <Popup>
              <strong>{weatherData.name}</strong>
              <br />
              🌡️ {Math.round(weatherData.main.temp)}°C
              <br />
              💧 {weatherData.main.humidity}%<br />
              💨 {weatherData.wind.speed} km/h
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
