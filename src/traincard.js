// components/TrainCard.js
import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <h2>{train.name}</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Arrival: {train.arrivalTime}</p>
      <p>Delay: {train.delay}</p>
      {/* Additional train details */}
    </div>
  );
};

export default TrainCard;
