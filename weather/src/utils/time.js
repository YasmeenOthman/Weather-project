// Any reusable functions
export function formatLocalTime(dt, timezoneOffset) {
  const localTime = new Date((dt + timezoneOffset) * 1000);
  return localTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
}
export function formatLocalDateTime(dt, timezoneOffset) {
  const localTime = new Date((dt + timezoneOffset) * 1000);

  const date = localTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  const time = localTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });

  return `${date} • ${time}`;
}

export function getTimePercent(sunriseTime, sunsetTime, now) {
  const total = sunsetTime - sunriseTime;
  const passed = now - sunriseTime;
  return Math.max(0, Math.min(1, passed / total));
}

export function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (Math.PI * angleDeg) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}
