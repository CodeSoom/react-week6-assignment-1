import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';
import { loadRestaurantDetail } from './actions';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  const dispatch = useDispatch();
  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail(restaurantId));
  }, [restaurantId]);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
