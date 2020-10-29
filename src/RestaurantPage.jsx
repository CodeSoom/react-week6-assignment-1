import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import { loadRestaurant } from './actions';

export default function RestaurantsPage() {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
