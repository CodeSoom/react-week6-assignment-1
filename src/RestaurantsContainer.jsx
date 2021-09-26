import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <Link to={`/restaurants/${id}`} key={id}>
          <li>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
