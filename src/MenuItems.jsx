import React from 'react';

export default function MenuItems({ menuItems }) {
  return (

    <ul>
      {(menuItems)
        ? menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        )) : '값이 없어요!'}
    </ul>
  );
}
