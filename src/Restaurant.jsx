import React from 'react';

export default function Restaurant({
  name,
  address,
  menuItems,
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:&nbsp;
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
    </>
  );
}
