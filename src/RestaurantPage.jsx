import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { loadRestaurant } from './actions';



export default function RestaurantPage({ params }) {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));
  const { name, address, menuItems } = restaurant;
  const { id } = params || useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);
  return (
    <div>
      <div>{name}</div>
      <div>{`주소: ${address}`}</div>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
