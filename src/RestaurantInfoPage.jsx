import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { loadRestaurantInfo, selectRestaurant } from './actions';

import RestaurantInfoContainer from './RestaurantInfoContainer';

export default function RestaurantInfoPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(selectRestaurant(Number(id)));
    dispatch(loadRestaurantInfo());
  });

  return (
    <RestaurantInfoContainer />
  );
}
