import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import RestauantContainer from './RestaurantContainer';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <RestauantContainer />
  );
}
