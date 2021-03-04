import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import NotFound from './NotFound';
import RestaurantDetailContainer from '../container/RestaurantDetailContainer';

import { loadRestaurant } from '../actions';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const isInValidParam = !Number.isInteger(parseInt(id, 10));

  if (isInValidParam) {
    return <NotFound />;
  }

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, [id]);

  return (
    <RestaurantDetailContainer />
  );
}
