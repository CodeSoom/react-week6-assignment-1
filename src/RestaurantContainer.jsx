import React from 'react';
import { useSelector } from 'react-redux';

export default function RestaurantContainer() {
  const restaurant = useSelector((state) => state.restaurant);

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>주소: 서울 강남구</p>
      <h3>메뉴</h3>
      <ul>
        <li>탕수육</li>
        <li>팔보채</li>
      </ul>
    </div>
  );
}
