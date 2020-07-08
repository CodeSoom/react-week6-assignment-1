import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  setRestaurantId,
  loadRestaurant,
} from './actions';

export default function RestaurantPage({ match: { params: { id } } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurantId(id));
    dispatch(loadRestaurant());
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
