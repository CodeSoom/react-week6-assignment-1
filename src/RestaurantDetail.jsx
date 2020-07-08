import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  if (restaurant === null) {
    return (
      <p>로딩중입니다...</p>
    );
  }

  const { name, address, menuItems } = restaurant;

  return (
    <>
      <h1>{name}</h1>
      <p>{address}</p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </>
  );
}
