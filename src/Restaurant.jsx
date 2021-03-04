import React from 'react';

import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <Link to="/restaurants">
        <p>뒤로 가기</p>
      </Link>
      <h1>{name}</h1>
      <address>
        주소:
        {' '}
        {address}
      </address>
      <h2>메뉴</h2>
      <ul>
        {menuItems.length
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
