import React from 'react';

export default function Menus({ menus }) {
  if (!menus) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ul>
      {menus.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
