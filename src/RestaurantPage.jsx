import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  // TODO : 서버로부터 restaurant 가져오기
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  });

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
      <h3>양천주가</h3>
      <p>주소: 서울시 강남구</p>
      <h3>메뉴</h3>
      <ul>
        <li>탕수육</li>
        <li>팔보채</li>
      </ul>
    </div>
  );
}
