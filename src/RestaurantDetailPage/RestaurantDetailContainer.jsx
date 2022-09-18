import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import { loadRestaurantDetail } from '../actions';

import { get } from '../utils';

export default function RestaurantDetailContainer({ restaurantId }) {
  const restaurantDetail = useSelector(get('restaurantDetail'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId }));
  }, [restaurantId]);

  if (!restaurantDetail) return <h2>loading...</h2>;

  return (
    <RestaurantDetail
      restaurantDetail={restaurantDetail}
    />
  );
}
