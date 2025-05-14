# Weathery

Weathery is a simple and elegant weather app built with React. It uses the [OpenWeatherMap API](https://openweathermap.org/city/2643743) to fetch real-time weather data based on your current location or any city you search for. The app displays essential weather details like temperature, condition, and forecasts in a clean and user-friendly interface


## Features

- 🌍 Current Location Weather
- 🔍 Search by City Name
- 📅 5-Day Forecast Overview
- 🌄 Animated Sun Arc (Sunrise to Sunset)
- ☀️ Weather Highlights** (Wind,Humidity, FeelsLike, etc.)
- 📍 Interactive Weather Map
- 🎨 Responsive UI with Custom Icons


## 🔧 Technologies Used
- ⚛️ **React** (with Context API)
- ⚡ **Vite** (build tool)
- 📦 **OpenWeatherMap** API
- 🗺️ **Leaflet & React-Leaflet** (for maps)
- 🎯 **React** Spring (animations)
- 📡 **axios** (for API calls)

  
## 📸 Screenshots 
<img width="1280" alt="weathercard&highlights" src="https://github.com/user-attachments/assets/7d1b453d-b1d9-44d5-bafd-ba19e824a59c" />
<img width="1280" alt="forecast&map" src="https://github.com/user-attachments/assets/1196ea15-6884-435c-a5e3-7c66ddba38d4" />



## 🌐 Live Demo
🔗 [Try the Live App](https://weatheryyas.netlify.app/)

## 🚀 Run Locally
### Prerequisites
- Node.js ≥ 16
- A free OpenWeatherMap API key
### Installation
- **Clone the project**

```bash
  git clone git@github.com:YasmeenOthman/Weather-project.git
```

- **Go to the project directory**

```bash
  cd Weather-project
```

- Install dependencies

```bash
  npm install
```

### 🔐 Environment Setup
- Create a `.env` file in the weather/ directory with:

```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### ▶️ Run the App
```bash
  npm run dev
```
Open http://localhost:5173 to view it in the browser.

## 📂 Project Structure
```bash
yasmeenothman-weather-project/
├── README.md
└── weather/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .gitignore
    ├── public/
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        ├── components/
        │   ├── Forecast/
        │   ├── Highlights/
        │   ├── WeatherCard/
        │   └── WeatherMap/
        ├── context/
        ├── services/
        └── utils/

```
## 📄 License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
You are free to use, modify, and distribute it.


## Authors
Made with ❤️ by [Yasmeen Othman](https://github.com/YasmeenOthman/Weather-project)
Feel free to reach out or contribute!

