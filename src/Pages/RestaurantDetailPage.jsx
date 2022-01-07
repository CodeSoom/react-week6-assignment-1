import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  setRestaurantDetail,
  loadRestaurantDetail,
} from '../redux/actions';

import { get } from '../Utils/utils';

export default function RestaurantDetailpage() {
  const dispatch = useDispatch();
  const restaurantDetail = useSelector(get('restaurantDetail'));

  const { id } = useParams();

  useEffect(() => {
    dispatch(setRestaurantDetail(null));
    dispatch(loadRestaurantDetail(id));
  }, []);

  if (!restaurantDetail) {
    return (
      <p>Loading...</p>
    );
  }

  const { name, address, menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
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
