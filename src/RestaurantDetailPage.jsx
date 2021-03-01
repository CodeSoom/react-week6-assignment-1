import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import MenuItems from './MenuItems';

export default function RestaurantDetailPage({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  dispatch(loadRestaurant(id));

  const { name, address, menuItems } = useSelector((state) => state.restaurant);

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {`주소: ${address}`}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}