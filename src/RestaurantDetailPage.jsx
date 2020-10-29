import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantDetailPage() {
  const { restaurant: { name, address, menuItems } } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>

      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
