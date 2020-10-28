import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../__mocks__/react-redux';

import RestaurantContainer from './RestaurantContainer';
import RestaurantDetail from './RestaurantDetail';
import Loading from './Loading';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantPage({ match: { params: { restaurantId } } }) {
  const dispatch = useDispatch();

  const id = Number(restaurantId);

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant.id) {
    return (<Loading />);
  }

  return ((
    <div>
      <RestaurantContainer restaurantId={id} />
    <RestaurantDetail restaurant={restaurant} />
    </div>
  ));
}
