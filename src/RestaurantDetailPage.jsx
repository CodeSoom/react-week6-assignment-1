import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useRouteMatch } from 'react-router-dom';

import { get } from './utils';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));

  const match = useRouteMatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(match.params.id));
  });

  return restaurant ? (
    <div>
      <h1>{restaurant.name}</h1>
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
    </div>
  ) : (<h2>Loading...</h2>);
}
