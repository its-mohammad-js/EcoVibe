import { useState, useEffect, useRef } from "react";

// Custom hook for managing timer and pause functionality
export function useTimer(initialTime, onTimeout) {
  const [remainingTime, setRemainingTime] = useState(initialTime); // Time left on the timer
  const [pause, setPause] = useState(false); // Pause state to control whether the timer is paused
  const timerRef = useRef(); // Reference to hold the timer ID
  const startTimeRef = useRef(); // Reference to track when the timer was started for pause calculations

  // Effect to manage the timer and update the remaining time
  useEffect(() => {
    if (pause) return; // Skip timer logic if the timer is paused

    // Start the timer
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      onTimeout(); // Call the onTimeout function when the timer expires
    }, remainingTime);

    // Clean up the timer on component unmount or when the timer changes
    return () => clearTimeout(timerRef.current);
  }, [remainingTime, pause, onTimeout]);

  // Function to toggle the pause state
  const handlePause = (value) => {
    setPause((prevPause) => (value ? value : !prevPause));
  };

  // return data & functions
  return {
    remainingTime,
    pause,
    handlePause,
    setRemainingTime,
    setPause,
  };
}
