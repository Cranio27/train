// pages/SingleTrainPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TrainCard from './traincard';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch single train data from the backend API
    axios.get(`/api/trains/${trainId}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [trainId]);

  return (
    <div>
      {train ? (
        <TrainCard train={train} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
