// CountUp from React Bits (TS-TW variant)
// Functional stub - full version from reactbits.dev for better easing

import React, { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1.5, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // approx 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

export default CountUp;
