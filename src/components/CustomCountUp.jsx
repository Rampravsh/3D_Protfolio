import { useEffect, useState } from "react";

const CustomCountUp = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (duration <= 0) {
      setCount(end);
      return;
    }

    let startTime;
    let rafId;
    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      if (progress < duration) {
        rafId = requestAnimationFrame(animateCount);
      }
    };
    rafId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(rafId);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default CustomCountUp;
