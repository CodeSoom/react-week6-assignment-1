import React from 'react';

import RestaurantMenu from './RestaurantMenu';

export default function RestaurantDatail({
  restaurant: {
    name,
    address,
    menuItems,
  },
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>Menu</h3>
      <RestaurantMenu menu={menuItems} />
    </div>
  );
}
