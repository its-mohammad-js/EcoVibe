import { useState, useEffect, useRef } from "react";

// Custom hook for managing timer and pause functionality
export function useTimer(initialTime, onTimeout) {
  const [remainingTime, setRemainingTime] = useState(initialTime); // Time left on the timer
  const [pause, setPause] = useState(true); // Pause state to control whether the timer is paused
  const timerRef = useRef(); // Reference to hold the timer ID
  const startTimeRef = useRef(); // Reference to track when the timer was started for pause calculations
  const [contentType, setType] = useState(null);

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

  useEffect(() => {
    if (contentType?.startsWith("image/")) {
      if (pause) {
        // Calculate the difference between the start time and remaining time
        const elapsedTime = Date.now() - startTimeRef.current;
        const adjustedRemainingTime = Math.max(remainingTime - elapsedTime, 0);

        if (adjustedRemainingTime > 0)
          // Optionally, you can update the remaining time state here
          setRemainingTime(adjustedRemainingTime);
      }
    }
  }, [contentType, pause]);

  // return data & functions
  return {
    setType,
    startTimeRef,
    remainingTime,
    pause,
    handlePause,
    setRemainingTime,
    setPause,
  };
}
