import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from './Restaurant';

import { get } from './utils';

function isEmpty(param) {
  return Object.keys(param).length === 0;
}

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (isEmpty(restaurant)) {
    return <p>해당 레스토랑은 상세정보가 없습니다!</p>;
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
