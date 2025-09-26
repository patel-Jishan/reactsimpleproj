import "../App.css";
import React, { useState, useRef } from "react";  // Import useRef

export function Demo() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function start() {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  }

  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Time: {time}</h1>
      <button
        style={{
          margin: "5px",
          padding: "10px 40px",
          backgroundColor: "black",
          color: "red",
          borderRadius: "10px"
        }}
        onClick={start}
      >
        Start
      </button>
      <button
        style={{
          margin: "5px",
          padding: "10px 40px",
          backgroundColor: "black",
          color: "red",
          borderRadius: "10px"
        }}
        onClick={stop}
      >
        Stop
      </button>
    </div>
  );
}
