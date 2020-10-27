import React from 'react';

export default function RestaurantsDetailsPage({ name, address, menuItems }) {
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
