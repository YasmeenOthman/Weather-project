import "./Forecast.css";

function TomorrowCard({ tomorrow }) {
  return (
    <div className="tomorrow-card">
      <img
        src={
          tomorrow?.icon ||
          "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
        }
        alt="storm icon"
        className="tomorrow-icon"
      />
      <div className="tomorrow-card-content">
        <div className="tomorrow-label">Tomorrow</div>
        <div className="tomorrow-description">
          {tomorrow?.day}, {tomorrow?.date}
        </div>
        <div className="tomorrow-temp">{tomorrow?.temp}</div>
      </div>
    </div>
  );
}

export default TomorrowCard;
