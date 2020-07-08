import React from 'react';

export default function RestaurantDetail({ params }) {
  console.log(params.id);
  const menu = [];

  return (
    <div>
      <h2>마법사주방</h2>
      <p>서울 강남구</p>
      <h3>메뉴</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
