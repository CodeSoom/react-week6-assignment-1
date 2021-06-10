import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { get } from './utils';

// import {
//   setRestaurant,
//   loadRestaurants,
// } from './actions';

export default function RestaurantsContainer() {
  const history = useHistory();

  const restaurants = useSelector(get('restaurants'));

  // function handleClick(restaurantId) {
  //   dispatch(setRestaurant(restaurantId));
  //   dispatch(loadRestaurants());
  // }

  function handleClick(id) {
    history.push(`/detailPage/${id}`);
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
