import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { loadRestaurantDetails } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClickRestaurant(id) {
    dispatch(loadRestaurantDetails(id));
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <Link to={`/restaurants/${id}`} key={id} onClick={() => handleClickRestaurant(id)}>
          <li>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
