import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantConatiner() {
  const { name, address, menuItems } = useSelector(get('restaurant'));
  const loading = useSelector(get('restaurantLoading'));

  if (loading) {
    return 'loading...';
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <ul>
        {menuItems.map(({ name: menuName }) => (
          <li>{menuName}</li>
        ))}
      </ul>
    </div>
  );
}
