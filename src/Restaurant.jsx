import React from 'react';

export default function Restaurant({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {address}
      </p>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </div>
  );
}
