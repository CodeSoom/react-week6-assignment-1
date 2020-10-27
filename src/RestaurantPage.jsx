import React, { useEffect } from 'react';

import { useDispatch } from '../__mocks__/react-redux';

import RestaurantContainer from './RestaurantContainer';

import { loadRestaurant } from './actions';

export default function RestaurantPage({ match: { params: { restaurantId } } }) {
  const dispatch = useDispatch();

  const id = Number(restaurantId);

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return ((
    <RestaurantContainer restaurantId={id} />
  ));
}
