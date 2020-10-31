import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { restaurant: { name, address, menuItems } } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>

      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
