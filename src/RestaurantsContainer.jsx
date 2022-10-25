import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  selectRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link
            to={`/restaurant/${restaurant.id}`}
            onClick={() => handleClick(restaurant.id)}
            state={{ restaurantId: restaurant.id }}
          >
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
