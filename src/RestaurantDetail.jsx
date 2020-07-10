import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  if (!restaurant) {
    return (
      <p>레스토랑 상세 로딩중...</p>
    );
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      주소 :
      {' '}
      {restaurant.address}
      <h3>메뉴</h3>
      <ul>
        {
          restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
