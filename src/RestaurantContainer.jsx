import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const loading = useSelector(get('loading'));
  const { name, address, menuItems } = useSelector(get('restaurant'));

  if (loading) return (<div>Loading...</div>);
  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </div>
  );
}
