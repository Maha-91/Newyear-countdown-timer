import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`01/01/${year + 1}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      <h1 id="header" class="header">
        New Year {year + 1} Countdown
      </h1>
      <h2 class="newyear">With React Hooks!</h2>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span class="wish-message">💥 Happy NewYear 2021 ! 💥🎄🎊</span>
      )}
      <div className="countdown-wrapper">
        <div className="countdown-box">
          {timeLeft.days}
          <span className="legend">Days</span>
        </div>
        <div className="countdown-box">
          {timeLeft.hours}
          <span className="legend">Hours</span>
        </div>
        <div className="countdown-box">
          {timeLeft.minutes}
          <span className="legend">Minutes</span>
        </div>
        <div className="countdown-box">
          {timeLeft.seconds}
          <span className="legend">Seconds</span>
        </div>
      </div>
    </div>
  );
}
export default App;
