import React from 'react';

export default function Restaurant({ restaurant: { name, address, menuItems }, handleClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        <p>레스토랑스 페이지로 가기</p>
      </button>
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
