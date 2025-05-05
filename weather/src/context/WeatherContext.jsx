import { createContext, useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherService";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Palestine"); // default
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const current = await fetchCurrentWeather(city);
        const forecastData = await fetchForecast(city);
        setCurrentWeather(current);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("City not found");
      }
    };

    fetchData();
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ currentWeather, forecast, setCity, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
