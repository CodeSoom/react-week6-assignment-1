import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurantDetail,
  loadRestaurantDetail,
} from './actions';

import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantDetailContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurantDetail(null));
    dispatch(loadRestaurantDetail(restaurantId));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (restaurant === null || !restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
