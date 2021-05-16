import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function HomePage() {

  const restaurantMenus = useSelector(get('restaurantMenus'));

  return (
    <div>
      <h1>선택한 음식점 명 : { restaurantMenus }</h1>
      <p>주소: 서울시 강남구</p>
      <h2>메뉴</h2>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </div>
  );
}
