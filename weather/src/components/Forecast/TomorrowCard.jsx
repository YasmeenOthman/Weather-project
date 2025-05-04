import "./Forecast.css";

function TomorrowCard() {
  return (
    <div className="tomorrow-card">
      <div>
        <img
          src="../src/assets/icons/thunderstorm.png"
          alt="Weather"
          className="tomorrow-icon"
        />
      </div>
      <div className="tomorrow-card-content">
        <p className="tomorrow-label">Tomorrow</p>
        <p className="tomorrow-temp">23°</p>
        <p className="tomorrow-description">Thunder Storm day</p>
      </div>
      <div className="tomorrow-chart">📈📈📈</div>
    </div>
  );
}

export default TomorrowCard;
