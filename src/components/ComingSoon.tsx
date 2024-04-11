import React, { useEffect, useMemo } from 'react';
import Countdown from 'react-countdown';
import './ComingSoon.scss';

const ComingSoon: React.FC = () => {
  // Initialize the start date memoized so it doesn't change on every render
  const startDate = useMemo(() => new Date('2024-03-01'), []);

  // Calculate the end date which is 6 months from the start date
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 6);

  // Retrieve target date from local storage or set it to the start date
  const storedTargetDate = localStorage.getItem('targetDate');
  const initialTargetDate = useMemo(() => {
    return storedTargetDate ? new Date(storedTargetDate) : startDate;
  }, [storedTargetDate, startDate]);

  useEffect(() => {
    // Store the target date in local storage
    localStorage.setItem('targetDate', initialTargetDate.toISOString());
  }, [initialTargetDate]);

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
            <Countdown date={initialTargetDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
