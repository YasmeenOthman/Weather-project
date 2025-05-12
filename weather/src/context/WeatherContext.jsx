// src/context/WeatherContext.jsx
import { createContext, useState, useEffect } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchWeatherByCoords,
} from "../services/weatherService";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Palestine"); // fallback/default
  const [coords, setCoords] = useState(null);
  const [useCoords, setUseCoords] = useState(true); // track whether to use coordinates or city
  const [error, setError] = useState(null);

  // ⬇️ Automatically use geolocation on first load
  useEffect(() => {
    if (!coords) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (err) => {
          console.error("Geolocation error", err);
        }
      );
    }
  }, []);

  // ⬇️ When coords or city changes, fetch weather
  useEffect(() => {
    const fetchData = async () => {
      try {
        let current, forecastData;

        if (coords && useCoords) {
          current = await fetchWeatherByCoords(coords.lat, coords.lon);
          forecastData = await fetchForecast(current.name);
          setCity(current.name); // optional: sync UI
        } else {
          current = await fetchCurrentWeather(city);
          forecastData = await fetchForecast(city);
        }

        setCurrentWeather(current);

        setForecast(forecastData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("City not found or invalid location");
      }
    };

    fetchData();
  }, [city, coords, useCoords]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        coords,
        city,
        setCity,
        setCoords,
        setUseCoords,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
