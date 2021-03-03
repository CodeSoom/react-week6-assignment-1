import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';
import { loadRestaurant } from './actions';
import NotFound from './NotFound';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  const dispatch = useDispatch();

  const { id } = useParams();

  const isValidParam = Number.isInteger(parseInt(id, 10));

  if (!isValidParam) {
    return <NotFound />;
  }

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, [id]);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
