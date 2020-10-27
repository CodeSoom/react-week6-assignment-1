import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

import {
  loadInitialData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <>
      <HomePage />
      <RestaurantsPage />
    </>
  );
}
