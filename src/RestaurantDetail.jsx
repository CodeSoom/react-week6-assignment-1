import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default function RestaurantDetail({ params }) {
  const menu = [];

  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

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
