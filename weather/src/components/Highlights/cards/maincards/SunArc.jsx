import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { BsSunset } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { getTimePercent, polarToCartesian } from "../../../../utils/time";
import "./SunArc.css";

function SunArc({ sunriseTime, sunsetTime }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const now = Date.now();
    setPercent(getTimePercent(sunriseTime, sunsetTime, now));
  }, [sunriseTime, sunsetTime]);

  const angle = percent * 180;
  const { x, y } = polarToCartesian(100, 100, 80, angle);

  const sunStyles = useSpring({
    cx: x,
    cy: y,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="sun-arc-wrapper">
      <div className="sun-icon left">
        <BsSunrise />
      </div>
      <svg viewBox="0 0 200 110" width="100%" height="100">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="#FFD700"
          fill="none"
          strokeDasharray="4 4"
        />
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="#555"
          strokeWidth="1"
        />
        <div className="sun-icon left"></div>
        <circle cx="20" cy="100" r="3" fill="#FFD700" />
        
        <circle cx="180" cy="100" r="3" fill="#FFD700" />
        <animated.circle
          r="6"
          fill="#FFD700"
          stroke="white"
          strokeWidth="1"
          style={sunStyles}
        />
      </svg>
      <div className="sun-icon right">
        <BsSunset />
      </div>
    </div>
  );
}

export default SunArc;
