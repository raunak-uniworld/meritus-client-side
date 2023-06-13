import React, { useState, useEffect } from 'react';

const Tickers = ({ tickerList }) => {
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentTickerIndex((prevIndex) => (prevIndex + 1) % tickerList.length);
      }
    }, 2000);

    return () => {
      clearInterval(tickerInterval);
    };
  }, [tickerList, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s',
          transform: `translateX(-${currentTickerIndex * 100}%)`,
        }}
      >
        {tickerList.map((ticker, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e0e0e0',
              padding: '8px',
              fontSize: '16px',
            }}
          >
            {ticker}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickers;
