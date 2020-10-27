import React, { useEffect } from 'react';

import { useDispatch } from '../__mocks__/react-redux';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ match: { params: { restaurantId } } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  const id = Number(restaurantId);

  return ((
    <RestaurantContainer restaurantId={id} />
  ));
}
