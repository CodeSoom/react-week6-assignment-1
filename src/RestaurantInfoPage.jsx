import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantInfoContainer from './RestaurantInfoContainer';

import {
  loadRestaurantInfo,
  selectRestaurant,
} from './actions';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const restaurantId = useParams();

  useEffect(() => {
    dispatch(selectRestaurant(restaurantId));
    dispatch(loadRestaurantInfo());
  });

  return (
    <RestaurantInfoContainer />
  );
}
