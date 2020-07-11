import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantDetailContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  if (restaurant === null) {
    return (
      <p>continue loading...</p>
    );
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {restaurant.address}
      <h3>메뉴</h3>
      {restaurant.menuItems.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
  );
}
