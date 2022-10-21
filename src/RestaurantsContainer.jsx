import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  selectRestaurant,
  loadRestaurantDetail,
} from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
    dispatch(loadRestaurantDetail());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link
            to="/restaurantDetailPage"
            onClick={() => handleClick(restaurants.id)}
          >
            {restaurant.name}

          </Link>
        </li>
      ))}
    </ul>
  );
}
