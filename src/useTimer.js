import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState();

  const [ isStart, setIsStart] = useState(false);
  const active = useRef();
  const refInterval = useRef(null); // 

  const startTimer = () => {
    refInterval.current = setInterval (
     () => setTime((pTime) => pTime + 1 ), 1000 
    );
    setIsStart(true);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    refInterval.current = null;
    setIsStart(false);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    stopTimer();
    setIsStart(false);
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
