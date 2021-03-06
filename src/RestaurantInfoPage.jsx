import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantInfoContainer from './RestaurantInfoContainer';

import {
  loadRestaurantInfo,
} from './actions';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantId));
  }, []);

  return (
    <RestaurantInfoContainer />
  );
}
