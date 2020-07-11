import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantDetails from './RestaurantDetails';

export default function RestaurantDetailsPage() {
  const restaurantDetails = useSelector(get('restaurantDetails'));

  return (
    <div>
      <RestaurantDetails
        restaurantDetails={restaurantDetails}
      />
    </div>
  );
}
