import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import { loadRestaurant } from './actions';

export default function RestaurantPage({
  match: {
    params: { restaurantId },
  },
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <RestaurantContainer />
  );
}
