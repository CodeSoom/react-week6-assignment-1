import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { loadRestaurant } from '../../actions';

import RestaurantContainer from '../../container/RestaurantContainer';

export default function RestaurantPage() {
  const { id: restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  });

  return <RestaurantContainer />;
}
