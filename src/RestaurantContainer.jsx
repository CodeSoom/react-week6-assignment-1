import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>Loading....</p>;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
