import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from './actions';

import RestaurantDetailConatiner from './RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <RestaurantDetailConatiner />
  );
}
