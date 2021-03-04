import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
