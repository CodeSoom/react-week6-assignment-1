import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from '../RestaurantContainer';

import {
  getRestaurant,
} from '../actions';

export default function RestaurantViewPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
