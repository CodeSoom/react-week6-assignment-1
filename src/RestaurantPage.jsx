import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  loadRestaurantDetail,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail());
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
