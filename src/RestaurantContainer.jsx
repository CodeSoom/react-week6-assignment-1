import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurant from './Restaurant';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
}
