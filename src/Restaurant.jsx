import React from 'react';

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <address>
        주소:
        {' '}
        {restaurant.address}
      </address>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems
          ? restaurant.menuItems.map((menu) => (
            <li key={menu.id}>
              {menu.name}
            </li>
          ))
          : (
            <p>메뉴가 없어요</p>
          )}
      </ul>
    </div>
  );
}
