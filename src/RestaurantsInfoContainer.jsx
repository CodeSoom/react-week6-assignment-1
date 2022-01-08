import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantsInfoContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }
  console.log(restaurant);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
