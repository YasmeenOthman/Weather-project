// src/components/Highlights/SunriseCard.jsx
import "./MainCard.css";

function SunriseCard() {
  return (
    <div className="highlight-card sunrise-card main-card">
      <h3>Sunrise & Sunset</h3>
      <div className="sun-times main-card-content">
        <div className="sun-time main-card-content-item">
          <span className="label">Sunrise:</span>
          <span className="value">6:32 AM</span>
        </div>
        <div className="sun-time main-card-content-item">
          <span className="label">Sunset:</span>
          <span className="value">7:45 PM</span>
        </div>
      </div>
    </div>
  );
}

export default SunriseCard;
