import React, { useState, useEffect } from 'react';

const LoadingDots: React.FC = () => {
  const [activeDot, setActiveDot] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevActiveDot) => (prevActiveDot + 1) % 3);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.5" cy="5" r="5" fill="black" fillOpacity={activeDot === 0 ? 0.8 : 0.08} />
      <circle cx="19.5" cy="5" r="5" fill="black" fillOpacity={activeDot === 1 ? 0.8 : 0.2} />
      <circle cx="33.5" cy="5" r="5" fill="black" fillOpacity={activeDot === 2 ? 0.8 : 0.2} />
    </svg>
  );
};

export default LoadingDots;
