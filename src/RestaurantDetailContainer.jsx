import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { get } from './utils';

import RestaurantDetail from './page/RestaurantDetail';
import { loadRestaurant } from './actions';

export default function RestaurantsDetailContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));
  const match = useMatch();

  useEffect(() => {
    dispatch(loadRestaurant(match.params.id));
  });

  return (
    <RestaurantDetail restaurants={restaurants} />
  );
}
