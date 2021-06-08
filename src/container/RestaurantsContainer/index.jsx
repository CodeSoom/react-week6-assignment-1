import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from '../../actions';

import { get } from '../../utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(loadRestaurant({ restaurantId }));

    window.location.href = `${window.location.href}/${restaurantId}`;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button type="button" onClick={() => handleClick(restaurant.id)}>
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
