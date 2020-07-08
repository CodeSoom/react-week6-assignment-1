import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from '../RestaurantContainer';

import { getRestaurantById } from '../actions';

export default function RestaurantViewPage({ match }) {
  const { params: { id } } = match;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantById(id));
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
