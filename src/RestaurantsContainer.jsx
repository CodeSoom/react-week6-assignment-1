import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  function handleClickRestaurant(id) {
    // todo: fetch by id
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id} onClick={() => handleClickRestaurant(id)}>
          <Link to="/restaurant-details">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
