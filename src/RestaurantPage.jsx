import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

function loadRestaurant() {
  return null;
}

export default function RestaurantPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant());
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
