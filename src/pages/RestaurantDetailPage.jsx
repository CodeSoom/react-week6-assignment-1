import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRestaurantDetails } from '../actions';

import RestaurantDetailsContainer from '../RestaurantDetailsContainer';

export default function RestaurantDetailPage() {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails(params.restaurantId));
  }, [params]);

  return (
    <RestaurantDetailsContainer />
  );
}

// TODO: 페이지 이동시 loading 구현
// 통신 실패처리
