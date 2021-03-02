import React from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { get } from './utils';

export default function RestaurantsDetailPage() {

  const { id } = useParams();
  const restaurantDetail = useSelector(get('restaurantDetail'));
  console.log(restaurantDetail);

  return (
    <div>
      <h2>{id}</h2>
      {/*<h4>주소: {address}</h4>*/}
      {/*<h3>메뉴</h3>*/}
      {/*<ul>*/}
      {/*  {menuItems.map((menuItem) => (*/}
      {/*    <li key={menuItem.id}>*/}
      {/*      {menuItem.name}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
}
