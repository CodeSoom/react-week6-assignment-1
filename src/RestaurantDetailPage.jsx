import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantDetailPage({ match: { params: { restaurantId } } }) {
  if (!Number.isInteger(parseInt(restaurantId, 10))) {
    return (
      <p>잘못된 접근입니다!</p>
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}
