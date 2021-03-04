import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from '../../redux/actions';

import NotFoundPage from '../NotFoundPage';

import RestaurantContainer from './RestaurantContainer';

import { isInteger } from '../../utils/utils';

export default function RestaurantPage() {
  const dispatch = useDispatch();

  const { id: restaurantId } = useParams();

  if (!isInteger(restaurantId)) {
    return (
      <NotFoundPage />
    );
  }

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <div>
      <RestaurantContainer />
    </div>
  );
}
