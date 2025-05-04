import "./FeelsLike.css";
function FeelsLike() {
  return (
    <div className="feels-like-card">
      <div className="feels-like-card-header">
        <h3>Feels Like</h3>
      </div>
      <div className="feels-like-card-content">
        <div className="feels-like-card-content-header">
          <p>84%</p>
        </div>
        <div className="feels-like-card-content-body">
          <p>The dew point is 20°C</p>
        </div>
      </div>
    </div>
  );
}

export default FeelsLike;
