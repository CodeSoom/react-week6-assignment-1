import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import {
  loadRestaurantDetailData,
} from './actions';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetailData());
  });

  return (
    <RestaurantDetailContainer />
  );
}
