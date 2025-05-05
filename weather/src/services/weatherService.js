// API call functions
import axios from "axios";

const API_KEY = "ef61d070814d087a0085c9fbe8bf6724";

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
