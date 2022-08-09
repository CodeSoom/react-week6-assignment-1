import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants && restaurants.map((restaurant) => {
        const path = `/restaurants/${restaurant.id}`;
        return (
          <li key={restaurant.id}>
            <Link to={path}>
              {restaurant.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
