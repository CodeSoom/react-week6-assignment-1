import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurant } from './actions';

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <p>restaurant detail is showing</p>
  );
}
