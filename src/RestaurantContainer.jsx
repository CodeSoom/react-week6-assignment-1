import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>식당 정보를 불러오고 있습니다...</p>;
  }

  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>
        주소:
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
