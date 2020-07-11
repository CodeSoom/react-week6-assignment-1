import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurantDetail,
} from './actions';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(restaurantId));
  });

  const restaurantDetail = useSelector(get('restaurantDetail'));

  if (!restaurantDetail) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <RestaurantDetail
      restaurantDetail={restaurantDetail}
    />
  );
}
