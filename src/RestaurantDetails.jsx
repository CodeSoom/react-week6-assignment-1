import React from 'react';

export default function RestaurantDetails({ restaurantDetails }) {
  const {
    name, address, menuItems,
  } = restaurantDetails;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        { address }
      </p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
