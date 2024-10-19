

import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaPlay, FaPause } from "react-icons/fa";

const Timer = ({ isPlaying, onPlayPauseToggle,keyProp }) => {
    const icon = isPlaying ? <FaPause /> : <FaPlay />; 
  
    const handlePlayPauseClick = (e) => {
        e.preventDefault();
        onPlayPauseToggle(); 
    };
  
    const formatTime = (remainingTime) => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const renderTime = ({ remainingTime }) => (
      <div className="timer">
          <h3 className="value text-bold text-xl text-center">{formatTime(remainingTime)}</h3>
          <button className="bg-white p-3 rounded-[50%] mt-3" onClick={handlePlayPauseClick}>
              {icon}
          </button>
      </div>
  );

  
    return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={keyProp}
          isPlaying={isPlaying}
          duration={60}
          colors={["#22c55e", "#004777", "#F7B801", "#A30000", "#EC5E05","#F60002"]}
          colorsTime={[50, 40, 30, 20, 10,0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    );
  };
  

export default Timer;

