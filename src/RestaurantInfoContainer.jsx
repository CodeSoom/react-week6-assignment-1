import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantInfoContainer() {
  const { name, address, menuItems } = useSelector(get('selectedRestaurantInfo'));

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
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
