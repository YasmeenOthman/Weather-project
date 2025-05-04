// src/components/Highlights/SunriseCard.jsx
import "./SunriseCard.css";

function SunriseCard() {
  return (
    <div className="highlight-card sunrise-card">
      <h3>Sunrise & Sunset</h3>
      <div className="sun-times">
        <div className="sun-time">
          <span className="label">Sunrise:</span>
          <span className="value">6:32 AM</span>
        </div>
        <div className="sun-time">
          <span className="label">Sunset:</span>
          <span className="value">7:45 PM</span>
        </div>
      </div>
    </div>
  );
}

export default SunriseCard;
