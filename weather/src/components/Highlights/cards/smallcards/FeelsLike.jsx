import "./SmallCard.css";
function FeelsLike() {
  return (
    <div className="feels-like-card small-card">
      <div className="feels-like-card-header small-card-header">
        <h3>Feels Like</h3>
      </div>
      <div className="feels-like-card-content small-card-content">
        <div className="feels-like-card-content-header">
          <p>84%</p>
        </div>
        <div className="feels-like-card-content-body small-card-content-body">
          <p>The dew point is 20°C</p>
        </div>
      </div>
    </div>
  );
}

export default FeelsLike;
