import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import DetailPage from './DetailPage';

import { loadDetail } from './actions';

import { get } from './utils';

export default function DetailContainer({ match }) {
  const dispatch = useDispatch();

  const detail = useSelector(get('detail'));

  const { id } = match.params;

  useEffect(() => {
    dispatch(loadDetail({ restaurantId: id }));
  }, [id]);

  return <DetailPage detail={detail} />;
}
