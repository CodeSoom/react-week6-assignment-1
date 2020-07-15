import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage({ location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: location && location.search.split('=')[1] * 1 }));
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
