import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { restaurantId } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
      <RestaurantContainer />
    </div>
  );
}
