import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from '../actions';

import RestaurantContainer from '../containers/RestaurantContainer';

export default function RestaurantPage({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, [id]);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
