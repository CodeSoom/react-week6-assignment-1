import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurant,
} from './actions';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailPage({ match: { params: { restaurantId } } }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
}
