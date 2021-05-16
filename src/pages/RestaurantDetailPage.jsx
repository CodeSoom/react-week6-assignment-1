import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurantDetail } from '../actions';

import RestaurantDetailContainer from '../containers/RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}
