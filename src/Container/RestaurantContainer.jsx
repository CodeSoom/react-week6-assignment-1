import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../Component/RestaurantDetail';

import { loadRestaurant } from '../actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    console.log('fadf');
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
