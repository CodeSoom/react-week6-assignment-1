import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurantDetail,
} from './actions';

export default function RestaurantDetailContainer({ restauranId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(restauranId));
  });

  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { name, address, menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}
