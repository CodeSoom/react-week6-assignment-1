import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import { selectRestaurant } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClickRestaurant(e) {
    dispatch(selectRestaurant(e.target.id));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/restaurant-detail" id={restaurant.id} onClick={handleClickRestaurant}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
