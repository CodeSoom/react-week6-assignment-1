import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from '../../../store/async-actions';

import { get } from '../../../utils';

import Restaurant from './Restaurant';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, [restaurantId]);

  return (
    <Restaurant
      restaurant={restaurant}
    />
  );
}
