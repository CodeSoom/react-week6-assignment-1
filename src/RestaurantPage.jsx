import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import {
  loadRestaurantDetail,
} from './actions';

export default function RestaurantPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  });

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
