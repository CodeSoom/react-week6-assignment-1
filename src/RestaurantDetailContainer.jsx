import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantDetail from './RestaurantDetail';

import { loadRestaurantDetail } from './actions';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const restaurantDetail = useSelector(get('restaurantDetail'));

  const dispatch = useDispatch();

  const { restaurantId } = useParams();

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
