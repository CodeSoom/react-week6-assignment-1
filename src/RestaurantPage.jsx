import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  setRestaurantId,
  setLoading,
  loadRestaurant,
} from './actions';

export default function RestaurantPage({ match: { params: { id } } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setRestaurantId(id));
    dispatch(loadRestaurant());
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
