// components/TrainList.js
import React from 'react';
import TrainCard from './traincard';

const TrainList = ({ trains }) => {
  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.trainnumber} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
