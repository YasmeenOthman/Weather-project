import "./Humidity.css";
function Humidity() {
  return (
    <div className="humidity-card">
      <div className="humidity-card-header">
        <h3>Humidity</h3>
      </div>
      <div className="humidity-card-content">
        <div className="humidity-card-content-header">
          <p>84%</p>
        </div>
        <div className="humidity-card-content-body">
          <p>The dew point is 20°C</p>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
