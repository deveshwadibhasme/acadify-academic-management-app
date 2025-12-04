import React, { useState, useEffect } from "react";

const Timer = ({ initialTime = 300 }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const storedTime = localStorage.getItem("timer");
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
      setIsRunning(true);
    } else {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    let timerId;
    if (time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      localStorage.setItem("timer", time.toString());
    } else if (time === 0) {
      setIsRunning(false);
      localStorage.removeItem("timer");
    }

    return () => clearInterval(timerId);
  }, [time, isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-xl w-full h-10 px-3 text-center pt-2 rounded-2xl bg-white mt-5 font-paragraph-body outline-none border-0 text-subtitle-text">
      {`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
    </div>
  );
};

export default Timer;
