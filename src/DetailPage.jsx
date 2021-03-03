import React from 'react';

export default function DetailPage({ detail }) {
  const { name, address, menuItems } = detail;

  return (
    <div>
      <h2>{name}</h2>
      <p>주소: {address}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
};
