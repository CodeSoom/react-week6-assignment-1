import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import { loadRestaurantDetail } from './actions';

import { get } from './utils';

export default function RestaurantDetailContainer({ match }) {
  const dispatch = useDispatch();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { id } = match.params;

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId: id }));
  }, [id]);

  return <RestaurantDetailPage restaurantDetail={restaurantDetail} />;
}
