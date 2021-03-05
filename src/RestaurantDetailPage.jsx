import React from 'react';

export default function RestaurantDetailPage({ restaurantDetail }) {
  const { name, address, menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <p>주소: {address}</p>
      <h3>메뉴</h3>
      { menuItems ?
        (<ul>
          {menuItems.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>)
      : null}
    </div>
  )
};
