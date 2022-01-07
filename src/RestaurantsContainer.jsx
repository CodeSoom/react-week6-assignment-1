import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { id, name } = restaurant;

        return (
          <li key={id}>
            <Link to={`/restaurant/${id}`}>
              {name}
            </Link>
          </li>
        );
      })}
      ;
    </ul>
  );
}
