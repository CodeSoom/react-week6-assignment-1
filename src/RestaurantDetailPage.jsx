import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantDetail } from './actions';
import RestaurantDetailContainer from './RestaurantDetailContainer';

import { get } from './utils';
// 1. useEffect를 통해서 id를 통해서 fetchRestaurantDetail을 통해서 정보를 얻는다
// 2. 받는 동안 Loading... 문구가 보인다
// 3. 완료시 detail Page를 생성한다.

export default function RestaurantDetailPage({ match }) {
  const dispatch = useDispatch();

  const { params: { id } } = match;

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  });

  const { done } = useSelector(get('selectedRestaurantDetail'));

  return (
    done === false ? <div>loading</div> : <RestaurantDetailContainer />
  );
}
