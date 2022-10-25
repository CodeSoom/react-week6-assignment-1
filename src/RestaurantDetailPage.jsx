import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  loadRestaurantDetail,
} from './actions';

export default function restaurantDetailPage({ params }) {
  const dispatch = useDispatch();
  const { restaurantId } = params || useParams();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantId }));
  }, [restaurantId]);

  return (
    <div>
      <h2>양천주가</h2>
      <p>서울 강남구</p>

      <h3>메뉴</h3>
      <ul>
        <li>짜장면</li>
      </ul>
    </div>
  );
}
