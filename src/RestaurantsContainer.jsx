import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer({ Link }) {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to={`/restaurants/${restaurant.id}`}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
