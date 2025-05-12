import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { fetchWeatherByCoords } from "../../services/weatherService";
import { cityLocations } from "../../utils/cityLocations";
import "leaflet/dist/leaflet.css";
import "./WeatherMap.css";

// Fix default marker icons (Leaflet bug in Webpack/Vite setups)
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
  const [cityWeatherData, setCityWeatherData] = useState([]);

  useEffect(() => {
    const fetchAllCities = async () => {
      const all = await Promise.all(
        cityLocations.map(async (city) => {
          const weather = await fetchWeatherByCoords(city.lat, city.lon);
          return { ...city, weather };
        })
      );
      setCityWeatherData(all);
    };

    fetchAllCities();
  }, []);

  return (
    <div className="weather-map">
      <h2>Weather condition map</h2>
      <MapContainer
        center={[31.9522, 35.2332]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cityWeatherData.map((city, i) => (
          <Marker key={i} position={[city.lat, city.lon]}>
            <Popup>
              <strong>{city.name}</strong>
              <br />
              🌡️ {Math.round(city.weather.main.temp)}°C
              <br />
              💧 {city.weather.main.humidity}%<br />
              💨 {city.weather.wind.speed} km/h
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
