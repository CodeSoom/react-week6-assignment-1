import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const restaurantDetail = useSelector(get('restaurantDetail'));
  if (restaurantDetail === undefined) {
    return (
      <div>
        페이지를 로딩중입니다..
      </div>
    );
  }

  return (
    <div>
      <h2>{restaurantDetail.name}</h2>
      <h4>
        주소:
        {restaurantDetail.address}
      </h4>
      <h3>메뉴</h3>
      <ul>
        {restaurantDetail.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
