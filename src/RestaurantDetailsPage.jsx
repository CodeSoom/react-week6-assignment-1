import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantDetailsContainer from './RestaurantDetailsContainer';

import { loadRestaurantDetails } from './actions';

export default function RestaurantDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetails(id));
  });

  return (
    <div>
      <RestaurantDetailsContainer />
    </div>
  );
}
