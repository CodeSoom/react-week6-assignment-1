import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from '../actions';

import RestaurantDetailContainer from '../containers/RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant({
      restaurantId,
    }));
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}
