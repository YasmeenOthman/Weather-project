import "./SmallCard.css";
function Humidity() {
  return (
    <div className="humidity-card small-card">
      <div className="humidity-card-header small-card-header">
        <h3>Humidity</h3>
      </div>
      <div className="humidity-card-content small-card-content">
        <div className="humidity-card-content-header small-card-content-header">
          <p>84%</p>
        </div>
        <div className="humidity-card-content-body small-card-content-body">
          <p>The dew point is 20°C</p>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
