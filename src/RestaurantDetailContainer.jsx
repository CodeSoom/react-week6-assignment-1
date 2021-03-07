import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import { loadRestaurantDetail } from './actions';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const dispatch = useDispatch();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId: id }));
  }, [id]);

  return <RestaurantDetailPage restaurantDetail={restaurantDetail} />;
}
