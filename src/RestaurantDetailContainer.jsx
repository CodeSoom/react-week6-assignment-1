import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurantDetail,
} from './actions';

export default function RestaurantDetailContainer({ restauranId }) {
  const dispatch = useDispatch();

  const restaurantDetail = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail());
  }, restauranId);

  const { menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{restaurantDetail.name}</h2>
      <p>
        주소:
        {' '}
        {restaurantDetail.address}
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
