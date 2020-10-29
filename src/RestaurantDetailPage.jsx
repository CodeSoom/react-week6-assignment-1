import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();
  const { restaurant: { name, address, menuItem } } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>

      <h3>메뉴</h3>
      <ul>
        {
          menuItem.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
