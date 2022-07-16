import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from '../actions';

import RestaurantDetailContainer from '../containers/RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant());
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}
