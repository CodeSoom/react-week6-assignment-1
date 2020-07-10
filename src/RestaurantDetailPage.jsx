import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurant,
} from './actions';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailPage({ match: { params: { restaurantId } } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
}
