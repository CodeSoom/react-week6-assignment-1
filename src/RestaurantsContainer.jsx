import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  aboutRestaurant,
  loadRestaurants,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));
  const selectedRestaurant = useSelector(get('selectedRestaurant'));

  function handleClick(restaurantId) {
    dispatch(aboutRestaurant(restaurantId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button
            type="button"
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
