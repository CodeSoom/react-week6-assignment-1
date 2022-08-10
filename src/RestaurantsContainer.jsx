import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/restaurant-detail">{restaurant.name}</Link>
        </li>
      ))}
    </ul>
  );
}
