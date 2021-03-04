import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));
  if (restaurant === undefined) {
    return (
      <div>
        페이지를 로딩중입니다..
      </div>
    );
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h4>
        주소:
        {restaurant.address}
      </h4>
      <h3>메뉴</h3>
      <ul>
        {restaurant.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
