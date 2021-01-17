import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import RestaurantContainer from '../containers/RestaurantContainer';
import { loadRestaurant } from '../modules/actions';

export default function RestaurantPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <RestaurantContainer />
  );
}
