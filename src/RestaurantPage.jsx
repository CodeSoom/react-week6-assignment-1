import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurant, setRestaurant } from './actions';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(setRestaurant({ id }));
    dispatch(loadRestaurant());
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
