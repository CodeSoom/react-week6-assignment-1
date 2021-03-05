import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsDetailContainer from '../containers/RestaurantsDetailContainer';

import { loadRestaurantsDetail, resetRestaurantsDetail } from '../actions';

export default function RestaurantsDetailPage({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(resetRestaurantsDetail());
    dispatch(loadRestaurantsDetail({ restaurantsId: id }));
  }, []);

  return (<RestaurantsDetailContainer />);
}
