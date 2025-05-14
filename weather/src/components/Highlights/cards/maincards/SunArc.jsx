// src/components/Forecast/SunArc.jsx

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { BsSunset, BsSunrise } from "react-icons/bs";
import { getTimePercent, polarToCartesian } from "../../../../utils/time";
import "./SunArc.css";

function SunArc({ sunriseTime, sunsetTime, sunriseLabel, sunsetLabel }) {
  // Track the percentage of time passed between sunrise and sunset
  const [percent, setPercent] = useState(0);

  // Update the sun position based on current time
  useEffect(() => {
    const now = Date.now(); // Current time in milliseconds
    setPercent(getTimePercent(sunriseTime, sunsetTime, now)); // Returns a value between 0 and 1
  }, [sunriseTime, sunsetTime]);

  // Fallback to 0% if the result is invalid
  const safePercent = isNaN(percent) ? 0 : percent;

  // Convert time percent to angle in degrees (flipped for correct SVG direction)
  // 0% -> 180° (left), 100% -> 0° (right)
  const angle = 180 - safePercent * 180;

  // Convert angle to (x, y) position on the arc
  const { x, y } = polarToCartesian(100, 100, 80, angle); // cx=100, cy=100, radius=80

  // Animate the sun's position smoothly using react-spring
  const sunStyles = useSpring({
    cx: x,
    cy: y,
    config: { tension: 120, friction: 14 }, // Controls animation speed and bounce
  });

  return (
    <div className="sun-arc-wrapper">
      <svg viewBox="0 0 200 130" width="100%" height="160" overflow="visible">
        {/* Arc path from sunrise (left) to sunset (right) */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="#FFD700"
          fill="none"
          strokeDasharray="4 4"
        />

        {/* Baseline connecting sunrise and sunset points */}
        <line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="#555"
          strokeWidth="1"
        />

        {/* Sunrise marker and label */}
        <circle cx="20" cy="100" r="3" fill="#FFD700" />
        <foreignObject x="0" y="105" width="40" height="60">
          <div className="sun-label">
            <BsSunrise size={18} />
            <div className="sun-time-text">{sunriseLabel}</div>
          </div>
        </foreignObject>

        {/* Sunset marker and label */}
        <circle cx="180" cy="100" r="3" fill="#FFD700" />
        <foreignObject x="160" y="105" width="40" height="60">
          <div className="sun-label">
            <BsSunset size={18} />
            <div className="sun-time-text">{sunsetLabel}</div>
          </div>
        </foreignObject>

        {/* Animated sun position based on current time */}
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
