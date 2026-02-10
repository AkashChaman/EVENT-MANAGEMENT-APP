// src/components/CountdownTimer.js

import React, { useState, useEffect } from "react";
import "../styles/CountdownTimer.css";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false,
        };
      }

      return { expired: true };
    };

    // set initial value
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return <div className="countdown-expired">Event has started!</div>;
  }

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <span className="countdown-value">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="countdown-label">Hours</span>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <span className="countdown-value">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="countdown-label">Minutes</span>
      </div>

      <div className="countdown-separator">:</div>

      <div className="countdown-item">
        <span className="countdown-value">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
