// src/App.jsx
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Highlights from "./components/Highlights/Highlights";
import Forecast from "./components/Forecast/Forecast";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import { WeatherProvider } from "./context/WeatherContext";
import "./App.css";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <main className="main-content">
          <section className="top-section">
            <WeatherCard />
            <Highlights />
          </section>

          <section className="bottom-section">
            <Forecast />
            <WeatherMap />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
