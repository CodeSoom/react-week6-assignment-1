import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../utils';
import RestaurantMenus from '../components/RestaurantMenus';
import RestaurantReviews from '../components/RestaurantReviews';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <address>{restaurant.address}</address>
      <RestaurantMenus menus={restaurant.menuItems} />
      <RestaurantReviews reviews={restaurant.reviews} />
    </div>
  );
}
