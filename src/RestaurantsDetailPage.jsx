import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantsDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <div>
      <RestaurantsDetailContainer />
    </div>
  );
}
