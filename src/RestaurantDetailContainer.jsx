import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  loadRestaurantDetail,
} from './actions';

export default function RestaurantDetailContainer({ restauranId }) {
  const dispatch = useDispatch();

  const selectRestaurant = useSelector(get('selectRestaurant'));

  useEffect(() => {
    dispatch(loadRestaurantDetail);
  }, restauranId);

  const { menuItems } = selectRestaurant;

  return (
    <div>
      <h2>{selectRestaurant.name}</h2>
      <p>
        주소:
        {' '}
        {selectRestaurant.address}
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
