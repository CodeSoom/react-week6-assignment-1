import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import DetailContainer from './DetailContainer';

export default function DetailPage({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const restaurant = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(loadRestaurant(id));
  });

  return (
    <DetailContainer restaurant={restaurant} />
  );
}
