import React from 'react';

export default function RestaurantsDetails() {
  const restaurants = [
    {
      id: 1,
      name: '양천주가',
      address: '서울시 양천구 목동',
      menu: [
        { id: 1, name: '비룡의 요리 1' },
        { id: 2, name: '천상의 맛 2' },
        { id: 3, name: '아니 이것은! 3' },
      ],
    },
  ];

  return (
    <div>
      <h2>{restaurants.name}</h2>
      <p>
        주소:
        {restaurants.address}
      </p>
      <h3>
        메뉴:
        {restaurants.menu}
      </h3>
    </div>
  );
}
