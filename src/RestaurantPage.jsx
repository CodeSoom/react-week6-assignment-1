import React from 'react';

import { useDispatch, useSelector } from 'react-redux';


export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));
  const { name, address, menuItems } = restaurant;
  return (
    <div>
      <div>{name}</div>
      <div>{`주소: ${address}`}</div>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
