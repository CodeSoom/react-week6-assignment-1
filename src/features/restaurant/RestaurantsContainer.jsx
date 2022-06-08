import { useSelector } from 'react-redux';

import { get } from '../../apps/utils';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
