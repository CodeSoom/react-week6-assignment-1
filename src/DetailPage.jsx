import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import DetailContainer from './DetailContainer';

export default function DetailPage({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, []);

  return (
    <DetailContainer />
  );
}
