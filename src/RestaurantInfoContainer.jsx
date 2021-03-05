import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantInfoContainer() {
  const restaurantInfo = useSelector(get('restaurantInfo'));

  if (!restaurantInfo) {
    return (
      <p>데이터가 없습니다.</p>
    );
  }

  const { name, address, menuItems } = restaurantInfo;

  return (
    <div>
      <h2>Restaurant Information</h2>
      <h3>{name}</h3>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h4>메뉴</h4>
      <ul>
        {menuItems.map(({ id, name: menuName }) => (
          <li key={id}>
            {menuName}
          </li>
        ))}
      </ul>
    </div>
  );
}
