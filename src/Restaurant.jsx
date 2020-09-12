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

  const restaurant = useSelector(get('restaurant'));

  return (
    <div>
      {restaurant ? (
        <>
          <h2>{restaurant.name}</h2>
          <p>
            주소:
            {' '}
            {restaurant.address}
          </p>
          <h2>메뉴</h2>
          <ul>
            {restaurant.menuItems.map((menu) => (
              <li key={menu.id}>
                {menu.name}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
