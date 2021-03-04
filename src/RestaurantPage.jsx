import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRestaurant } from './actions';
import { useParams } from 'react-router-dom';
import RestaurantContainer from './RestaurantContainer';
import RestaurantsMenuContainer from './RestaurantsMenuContainer';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <div>
      <RestaurantContainer />
      <RestaurantsMenuContainer />
    </div>
  );
}
