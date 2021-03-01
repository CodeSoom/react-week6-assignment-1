import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import { loadInitialData } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <RestaurantPage />
  );
}
