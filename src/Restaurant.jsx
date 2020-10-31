import React from 'react';

export default function Restaurant({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
