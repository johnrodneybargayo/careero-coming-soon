import React from 'react';
import './ComingSoon.scss';

const ComingSoon: React.FC = () => {
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
          <img className="logo" src="https://i.ibb.co/bPvqK6B/Careero-Logo-HD.png" alt="Logo" />
          <div className="logo-text">
            <h1>Coming Soon!</h1>
            <p>Stay tuned for our exciting launch.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
