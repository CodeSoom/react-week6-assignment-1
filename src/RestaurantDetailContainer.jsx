import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestauarantDetail,
} from './actions';

import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantDetailContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestauarantDetail(restaurantId));
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
