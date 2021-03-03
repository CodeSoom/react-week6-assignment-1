import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetail from './RestaurantsDetail';

import { loadRestaurantsDetail } from './actions';

import { get } from './utils';

export default function RestaurantsDetailPage({ match }) {
  const dispatch = useDispatch();
  const restaurantsDetail = useSelector(get('restaurantsDetail'));

  const { id } = match.params;

  useEffect(() => {
    dispatch(loadRestaurantsDetail({ restaurantsId: id }));
  }, []);

  return <RestaurantsDetail restaurantsDetail={restaurantsDetail} />;
}
