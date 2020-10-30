import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

function isEmpty(param) {
  return Object.keys(param).length === 0;
}

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (isEmpty(restaurant)) {
    return <p>해당 레스토랑은 상세정보가 없습니다!</p>;
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
