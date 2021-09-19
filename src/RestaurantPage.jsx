import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <div>
      <RestaurantContainer restaurantId={id} />
    </div>
  );
}
