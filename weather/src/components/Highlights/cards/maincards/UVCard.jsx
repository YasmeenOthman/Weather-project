// src/components/Highlights/UVCard.jsx
import "./MainCard.css";

function UVCard() {
  return (
    <div className="highlight-card uv-card main-card">
      <h3>UV Index</h3>
      <p className="uv-value main-card-value">5</p>
      <p className="uv-label main-card-label">Moderate</p>
    </div>
  );
}

export default UVCard;
