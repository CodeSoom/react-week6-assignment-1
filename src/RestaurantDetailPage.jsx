import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurantDetail } from './actions';
import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage({ match }) {
  const dispatch = useDispatch();

  const { params: { id } } = match;

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  });

  return (
    <RestaurantDetailContainer />
  );
}
