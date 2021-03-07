import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantsDetailContainer from '../containers/RestaurantsDetailContainer';

import { loadRestaurantsDetail, resetRestaurantsDetail } from '../actions';
import InvalidPage from './InvalidPage';

export default function RestaurantsDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  if (!Number(id)) {
    return (<InvalidPage />);
  }

  useEffect(() => {
    dispatch(resetRestaurantsDetail());
    dispatch(loadRestaurantsDetail({ restaurantsId: id }));
  }, []);

  return (<RestaurantsDetailContainer />);
}
