import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  selectRestaurant,
  loadRestaurant,
} from './actions';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRestaurant(id));
    dispatch(loadRestaurant());
  });

  return (
    <RestaurantContainer />
  );
}
