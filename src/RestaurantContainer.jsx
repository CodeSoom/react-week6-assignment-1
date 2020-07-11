import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  const loading = useSelector(get('loading'));

  if (loading) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <span>주소: </span>
      <span>{restaurant.address}</span>

      <h3>메뉴</h3>
      <ul>
        {restaurant.menuItems.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
