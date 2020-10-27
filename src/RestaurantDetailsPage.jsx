import React from 'react';
import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsDetailsPage() {
  const restaurantDetails = useSelector(get('restaurantDetails'));

  const { name, address, menuItems } = restaurantDetails;

  if (!name) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>{name}</h1>
      <p>
        주소 :
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </>
  );
}
