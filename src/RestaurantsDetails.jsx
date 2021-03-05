import React from 'react';

export default function RestaurantsDetails({ restaurantsDetails }) {
  const { name, address, menus } = restaurantsDetails;

  if (name === '') {
    return (
      <p>Now is loading</p>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{`주소: ${address}`}</p>
      <h2>메뉴</h2>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}
