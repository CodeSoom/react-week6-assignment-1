import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantsDetailPage() {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  });

  return (
    <div>
      <RestaurantsDetailContainer />
    </div>
  );
}
