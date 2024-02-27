import React from 'react';
import './ComingSoon.scss';

const ComingSoon: React.FC = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src="https://i.ibb.co/bPvqK6B/Careero-Logo-HD.png" alt="Logo" />
        <div className="logo-text">
          <h1>Coming Soon!</h1>
          <p>Stay tuned for our exciting launch.</p>
        </div>
      </div>
      <img className="portrait" src="https://i.ibb.co/JqLwwzN/careero.jpg" alt="Portrait" />
    </div>
  );
};

export default ComingSoon;
