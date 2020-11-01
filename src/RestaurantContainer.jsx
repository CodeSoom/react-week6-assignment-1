import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  const loading = useSelector(get('loading'));

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
