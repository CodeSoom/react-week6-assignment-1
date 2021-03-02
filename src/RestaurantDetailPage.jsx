import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant.name) {
    return (
      <p>loading</p>
    );
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <address>
        주소:
        {' '}
        {restaurant.address}
      </address>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems
          ? restaurant.menuItems.map((menu) => (
            <li key={menu.id}>
              {menu.name}
            </li>
          ))
          : (
            <p>메뉴가 없어요</p>
          )}

      </ul>
    </div>
  );
}
