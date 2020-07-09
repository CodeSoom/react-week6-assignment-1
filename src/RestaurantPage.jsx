import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  loadDetailData,
} from './actions';

export default function RestaurantPage({ match: { params: { id } } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetailData(id));
  });

  return (
    <RestaurantContainer />
  );
}
