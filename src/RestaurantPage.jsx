import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
  loadRestaurant,
} from './actions';

import RestaurantContainer from './RestaurantContainer';

import { get } from './utils';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const restaurant = useSelector(get('restaurant'));

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <>
      <RestaurantContainer data={restaurant} />
    </>
  );
}
