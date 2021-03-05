import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurantDetail } from './actions';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  return (
    <RestaurantDetail restaurant={restaurantDetail} />
  );
}
