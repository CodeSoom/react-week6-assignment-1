import { useSelector } from 'react-redux';

import Restaurants from '../../presentational/Restaurants';

import { get } from '../../utils';

export default function RestaurantsContainer({ onClickChangeRoute }) {
  const restaurants = useSelector(get('restaurants'));

  return (
    <Restaurants
      restaurants={restaurants}
      onClickChangeRoute={onClickChangeRoute}
    />
  );
}
