import React from 'react';

export default function MenuItems({ menuItems }) {
  return (
    menuItems
      ? (
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )
      : <p>값이 없어요!</p>
  );
}
