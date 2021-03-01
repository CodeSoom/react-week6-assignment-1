import React from 'react';

import { useSelector } from 'react-redux';

import {
  loadRestaurantDetail,
} from './actions';

import {
  Link,
} from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));
  const restaurantDetail = useSelector(get('restaurantDetail'));

  function x() {
    console.log('누르는 순간 api 호출하게 하기');
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id} onClick={ () => x() }>
          <Link to={{
            pathname: `/restaurant/${restaurant.id}`,
            state: {
              id: restaurantDetail.id || null,
              name: restaurantDetail.name || null,
              address: restaurantDetail.address || null,
              menuItems: restaurantDetail.menuItems || null,
            },
          }}
          >
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
