import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { get } from './utils';

import { loadRestaurantData } from './actions';

export default function Restaurant() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRestaurantData(id));
  });
  // const { name, address, menuItems } = useSelector(get('restaurant'));
  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      <h2>{restaurant && restaurant.name}</h2>
      <p>
        주소:
        {' '}
        {restaurant && restaurant.address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {restaurant && restaurant.menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
