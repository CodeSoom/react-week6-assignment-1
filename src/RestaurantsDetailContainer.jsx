import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const loading = useSelector(get('loading'));

  const restaurant = useSelector(get('restaurant'));

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  const { name, address, menuItems } = restaurant;

  if (!name) {
    return (
      <div>
        레스토랑의 정보가 없습니다.
      </div>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        &nbsp;
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
