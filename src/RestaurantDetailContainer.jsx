import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailContainer() {
  const setRestaurantDetail = useSelector(get('setRestaurantDetail'));
  
  console.log(setRestaurantDetail);
  
  return (
    <div>
      <p>11111</p>
    </div>
  );
}
