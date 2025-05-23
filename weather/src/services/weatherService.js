// API call functions
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};

export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await axios.get(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};
