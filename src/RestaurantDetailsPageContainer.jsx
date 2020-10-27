import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantsDetailsPage from './RestaurantDetailsPage';

export default function RestaurantsDetailsPageContainer() {
  const restaurantDetails = useSelector(get('restaurantDetails'));

  const { name, address, menuItems } = restaurantDetails;

  return (
    <RestaurantsDetailsPage
      name={name}
      address={address}
      menuItems={menuItems}
    />
  );
}
