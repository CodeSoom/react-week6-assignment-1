import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from './actions';
import RestaurantDetail from './RestaurantDetail';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((selector) => ({
    restaurant: selector.restaurant,
  }));

  useEffect(() => {
    if (!restaurantId) {
      return;
    }

    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <RestaurantDetail
      error={!restaurantId}
      loading={restaurant.loading}
      restaurant={restaurant.data}
    />
  );
}
