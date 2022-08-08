import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));
  const dispatch = useDispatch();

  function handleRestaurantClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
  }

  return (
    <ul>
      {restaurants && restaurants.map((restaurant) => {
        const path = `/restaurants/${restaurant.id}`;
        return (
          <li key={restaurant.id}>
            <Link to={path} onClick={() => handleRestaurantClick(restaurant.id)}>
              {restaurant.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
