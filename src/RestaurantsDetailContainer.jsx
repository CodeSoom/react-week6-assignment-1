import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { loadRestaurantsDetail } from './actions';
import RestaurantsDetail from './RestaurantsDetail';
import { get } from './utils';

export default function RestaurantsDetailContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantsDetail({ restaurantsId: 1 }));
    // dispatch();
  }, []);

  const restaurantsDetail = useSelector(get('restaurantsDetail'));

  return <RestaurantsDetail restaurantsDetail={restaurantsDetail} />;
}
