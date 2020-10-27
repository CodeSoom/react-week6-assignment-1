import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

export default function RestaurantContainer() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const { name, address, menuItems } = restaurant;

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:&nbsp;
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
