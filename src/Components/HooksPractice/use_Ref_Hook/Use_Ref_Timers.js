import React, { useRef, useState } from 'react';

const UseRefTimers=()=>{
  const timerIdRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (timerIdRef.current !== null) return; // Prevent multiple timers
    timerIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIdRef.current !== null) {
        console.log(timerIdRef.current)
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default UseRefTimers;
