import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useRouteMatch } from 'react-router-dom';

import { loadRestaurantDetail } from './actions';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const match = useRouteMatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(match.params.id));
  });

  return (
    <RestaurantDetailContainer />
  );
}
