import { useSelector } from 'react-redux';

import Restaurants from '../../presentational/Restaurants';

import { get } from '../../utils';

export default function RestaurantsContainer({ onClickChangeRoute }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick({ event, restaurantId }) {
    event.preventDefault();

    onClickChangeRoute(restaurantId);
  }

  return (
    <Restaurants
      restaurants={restaurants}
      onClick={handleClick}
    />
  );
}
