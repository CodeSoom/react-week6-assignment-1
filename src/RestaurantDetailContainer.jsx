import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <>
      <div>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.address}</p>
      </div>
      <div>
        <h3>메뉴</h3>
        <ul>
          {restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
