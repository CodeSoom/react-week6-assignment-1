import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import { loadRestaurant } from '../actions';
import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    if (Number(restaurantId) > 0) {
      dispatch(loadRestaurant(restaurantId));
    }
  }, []);

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
