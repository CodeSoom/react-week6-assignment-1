import React from 'react';

export default function MenuItems({ menuItems }) {
  if (!menuItems || !menuItems.length) {
    return (
      <p>메뉴 없어요!</p>
    );
  }

  return (
    <>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </>
  );
}
