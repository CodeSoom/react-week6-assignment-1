import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();
  const restaurantId = useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  });

  return (
    <div>
      <RestaurantDetailContainer />
    </div>
  );
}
