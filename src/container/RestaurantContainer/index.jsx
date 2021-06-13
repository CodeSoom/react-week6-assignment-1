import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from '../../actions';

import { get } from '../../utils';

import RestaurantDetail from '../../presentational/RestaurantDetail';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  });

  if (!restaurant) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return <RestaurantDetail restaurant={restaurant} />;
}
