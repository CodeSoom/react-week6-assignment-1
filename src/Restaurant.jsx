import React from 'react';

export default function Restaurant({ restaurant: { name, address, menuItems } }) {
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
