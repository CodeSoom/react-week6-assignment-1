import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  });

  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
      <h3>{restaurant.name}</h3>
      <p>
        주소:
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
