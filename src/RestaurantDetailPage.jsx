import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestauarantDetail,
} from './actions';

import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestauarantDetail({ restaurantId: id }));
  });

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
