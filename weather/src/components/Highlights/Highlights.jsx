// src/components/Highlights/Highlights.jsx

import "./Highlights.css";
import WindCard from "./cards/maincards/WindCard";
import SunriseCard from "./cards/maincards/SunriseCard";
import Humidity from "./cards/smallcards/Humidity";
import FeelsLike from "./cards/smallcards/FeelsLike";

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
          <SunriseCard />
          <FeelsLike />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
