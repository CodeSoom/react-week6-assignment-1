import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from '../../store/actions';
import RestaurantDetail from './RestaurantDetail';

const restaurantId = 1;

export default function RestaurantDetailPage() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, [restaurantId]);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
