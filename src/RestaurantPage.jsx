import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRestaurant } from './actions';
import RestaurantsDetailContainer from './RestaurantsDetailContainer';
import RestaurantsMenusContainer from './RestaurantsMenusContainer';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { location: { pathname } } = window;
  useEffect(() => {
    const id = pathname.split('/')[pathname.split('/').length - 1];
    dispatch(loadRestaurant(id));
  });

  return (
    <div>
      <RestaurantsDetailContainer />
      <RestaurantsMenusContainer />
    </div>
  );
}
