import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  loadDetailData,
} from './actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetailData());
  });

  return (
    <RestaurantContainer />
  );
}
