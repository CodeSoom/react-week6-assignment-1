import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantsDetailsPage from './RestaurantDetailsPage';

import { loadRestaurantDetails } from './actions';

export default function RestaurantsDetailsPageContainer({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(loadRestaurantDetails({ id }));
  }, []);

  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { name, address, menuItems } = restaurantDetail;

  return (
    <RestaurantsDetailsPage
      restaurant={{ name, address, menuItems }}
    />
  );
}
