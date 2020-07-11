import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantDetails from './RestaurantDetails';

import { loadRestaurantDetails } from './actions';

export default function RestaurantDetailsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails(1));
  });

  return (
    <div>
      양천주가
    </div>
  );
}
