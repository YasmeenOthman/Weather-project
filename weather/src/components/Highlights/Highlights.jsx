// src/components/Highlights/Highlights.jsx
import "./Highlights.css";
import WindCard from "./cards/WindCard";
import UVCard from "./cards/UVCard";
import SunriseCard from "./cards/SunriseCard";
import Humidity from "./cards/Humidity";
import Visibility from "./cards/Visibility";
import FeelsLike from "./cards/FeelsLike";

function Highlights() {
  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="highlights-grid">
        <div className="highlight-column">
          <WindCard />
          <Humidity />
        </div>
        <div className="highlight-column">
          <UVCard />
          <Visibility />
        </div>
        <div className="highlight-column">
          <SunriseCard />
          <FeelsLike />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
