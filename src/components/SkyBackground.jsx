import { useEffect, useState, useMemo } from "react";
import "./SkyBackground.css";

export default function SkyBackground({ children }) {
  const [timeOfDay, setTimeOfDay] = useState("night");

  // Generate random star positions once
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 60,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1,
    }));
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setTimeOfDay("morning");
      } else if (hour >= 12 && hour < 18) {
        setTimeOfDay("afternoon");
      } else {
        setTimeOfDay("night");
      }
    };

    updateTime();
    // Update every minute to reflect time changes
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`sky-background ${timeOfDay}`}>
      {/* Stars - shown in all times but with varying opacity */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: timeOfDay === "night" ? 1 : timeOfDay === "morning" ? 0.3 : 0.5,
            }}
          />
        ))}
      </div>

      {/* Crescent Moon - shown in all times */}
      <div className="moon" style={{ opacity: timeOfDay === "night" ? 1 : timeOfDay === "morning" ? 0.3 : 0.5 }}>
        <div className="moon-inner"></div>
      </div>

      {/* Content overlay */}
      <div className="content">{children}</div>
    </div>
  );
}