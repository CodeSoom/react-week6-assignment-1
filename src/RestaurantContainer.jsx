import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsDetailContainer() {
  const { name, address } = useSelector(get('restaurant'));

  return (
    <div>
      <h1>{name}</h1>
      <p>{`주소: ${address}`}</p>
    </div>
  );
}
