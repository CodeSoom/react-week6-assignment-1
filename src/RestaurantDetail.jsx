import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';

import { loadRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantDetail({ params }) {
  const dispatch = useDispatch();

  const { id } = params || useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return ('Loading');
  }

  return (
    <div>
      <div>
        <h2>{restaurant.name}</h2>
        <p>
          주소:
          {' '}
          {restaurant.address}
        </p>
        <ul>
          {restaurant.menuItems
           && restaurant.menuItems.length
           && restaurant.menuItems.map((menuItem) => (
             <li key={menuItem.id}>
               {menuItem.name}
             </li>
           ))}
        </ul>
      </div>
    </div>
  );
}
