import React from 'react';

export default function Restaurant({
  restaurant: { name, address, menuItems },
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ id, name: menuName }) => (
          <li key={id}>
            {menuName}
          </li>
        ))}
      </ul>
    </div>
  );
}
