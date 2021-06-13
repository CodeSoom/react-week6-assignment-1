import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);

  return (
    <p>
      restaurant
      {' '}
      {id}
    </p>
  );
}
