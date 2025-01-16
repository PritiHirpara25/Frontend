import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(null);

  const start = () => {
    if (stopwatchRef.current) return;
    stopwatchRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(stopwatchRef.current);
    stopwatchRef.current = null;
  };

  return (
    <div className="border-2 border-black">
      <h2 className="text-xl">Stopwatch: {time}s</h2>
      <button onClick={start} className="bg-red-200 p-1.5 m-2">Start</button>
      <button onClick={stop} className="bg-red-200 p-1.5 m-2">Stop</button>
    </div>
  );
};

export default Stopwatch;






// const reset = () => {
//   clearInterval(intervalRef.current);
//   intervalRef.current = null;
//   setTime(0);
// };