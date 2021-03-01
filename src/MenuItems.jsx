import React from 'react';

export default function MenuItems({ menuItems = [] }) {
  return (

    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
