import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/* <p>
        주소:
        &nbsp;
        {restaurant.address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
