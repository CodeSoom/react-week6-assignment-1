import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from '../../redux/actions';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { id: restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
