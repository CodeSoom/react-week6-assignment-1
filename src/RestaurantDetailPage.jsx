import React, { useEffect } from 'react';

export default function RestaurantDetailPage() {
  useEffect(() => {
    // APi 호출 ...
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
