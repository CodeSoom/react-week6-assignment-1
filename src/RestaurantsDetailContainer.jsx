import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

import RestaurantsDetail from './RestaurantsDetail';

export default function RestaurantsDetailContainer({ match }) {
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector(get('selectedRestaurant'));

  useEffect(() => {
    dispatch(loadRestaurant(match && match.params.id));
  }, []);

  return (
    <>
      <h2>Restaurants Detail</h2>
      <RestaurantsDetail restaurant={selectedRestaurant} />
    </>
  );
}
