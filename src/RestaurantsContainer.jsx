import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="">{restaurant.name}</a>
        </li>
      ))}
    </ul>
  );
}
