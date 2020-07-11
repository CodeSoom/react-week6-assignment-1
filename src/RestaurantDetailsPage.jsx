import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import { loadRestaurantDetails } from './actions';

export default function RestaurantDetailsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails(1));
  });

  return (
    <div>
      <RestaurantDetailsContainer />
    </div>
  );
}
