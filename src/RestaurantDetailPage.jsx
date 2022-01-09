import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  setRestaurantDetail,
  loadRestauarantDetail,
} from './actions';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(setRestaurantDetail(null));
    dispatch(loadRestauarantDetail({ restaurantId: id }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
