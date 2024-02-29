import React from 'react';
import Countdown from 'react-countdown';
import './ComingSoon.scss';

const ComingSoon: React.FC = () => {
  // Calculate the target date which is 4 months from now
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  return (
    <div className="container">
      <div className="video-background">
        <iframe
          title="Embedded Video"
          src="https://streamable.com/e/krcg65?autoplay=1&nocontrols=1"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      <div className="content-container">
        <div className="logo-container">
          <img className="logo" src="https://i.ibb.co/CMntvN5/Careero-Logo-HD-trans-white.png" alt="Logo" />
          <div className="logo-text">
          </div>
          <div className="countdown-timer">
            {/* <h2>Countdown Timer</h2> */}
            <Countdown date={targetDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
