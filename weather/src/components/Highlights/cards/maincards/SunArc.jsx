import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { BsSunset, BsSunrise } from "react-icons/bs";
import { getTimePercent, polarToCartesian } from "../../../../utils/time";
import "./SunArc.css";

function SunArc({ sunriseTime, sunsetTime }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const now = Date.now();
    setPercent(getTimePercent(sunriseTime, sunsetTime, now));
  }, [sunriseTime, sunsetTime]);
  const safePercent = isNaN(percent) ? 0 : percent;
  const angle = safePercent * 180;

  const { x, y } = polarToCartesian(100, 100, 80, angle);

  const sunStyles = useSpring({
    cx: x,
    cy: y,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="sun-arc-wrapper">
      <svg viewBox="0 0 200 130" width="100%" height="160" overflow="visible">
        {/* Arc Path */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="#FFD700"
          fill="none"
          strokeDasharray="4 4"
        />

        {/* Base Line */}
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="#555"
          strokeWidth="1"
        />

        {/* Sunrise Marker */}
        <circle cx="20" cy="100" r="3" fill="#FFD700" />
        <foreignObject x="0" y="105" width="40" height="60">
          <div className="sun-label">
            <BsSunrise size={18} />
            <div className="sun-time-text">{sunriseTime}</div>
          </div>
        </foreignObject>

        {/* Sunset Marker */}
        <circle cx="180" cy="100" r="3" fill="#FFD700" />
        <foreignObject x="160" y="105" width="40" height="60">
          <div className="sun-label">
            <BsSunset size={18} />
            <div className="sun-time-text">{sunsetTime}</div>
          </div>
        </foreignObject>

        {/* Animated Sun */}
        <animated.circle
          r="6"
          fill="#FFD700"
          stroke="white"
          strokeWidth="1"
          style={sunStyles}
        />
      </svg>
    </div>
  );
}

export default SunArc;
