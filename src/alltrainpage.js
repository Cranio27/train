// pages/AllTrainsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainList from './trainlist';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from the backend API
    axios.get('/api/trains')
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
