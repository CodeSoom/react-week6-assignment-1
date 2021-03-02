import React from 'react';

import { useSelector } from 'react-redux';

import Detail from './Detail';

export default function DetailContainer() {
  const restaurant = useSelector((state) => state.restaurant);

  return (
    <Detail restaurant={restaurant} />
  );
}
