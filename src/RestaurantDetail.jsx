import React from 'react';

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
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
