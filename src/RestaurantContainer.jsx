import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetail from './RestaurantDatail';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>로딩중...</p>;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
