// src/App.jsx
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Highlights from "./components/Highlights/Highlights";
import Forecast from "./components/Forecast/Forecast";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
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
  );
}

export default App;
