import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../Utils/utils';

import { setRestaurantId } from '../redux/actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurnatId) {
    dispatch(setRestaurantId(restaurnatId));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/detail" onClick={handleClick(restaurant.id)}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
