import React from 'react';

export default function Restaurant({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <h1>{name}</h1>
      <address>
        주소:
        {' '}
        {address}
      </address>
      <h2>메뉴</h2>
      <ul>
        {menuItems
          ? menuItems.map(({ id, name: menuName }) => (
            <li key={id}>
              {menuName}
            </li>
          ))
          : (
            <p>메뉴가 없어요</p>
          )}
      </ul>
    </div>
  );
}
