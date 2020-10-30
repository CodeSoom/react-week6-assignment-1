import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant());
  });

  return (
    <div>
      <h3>
        ID:
        {id}
      </h3>
    </div>
  );
}
