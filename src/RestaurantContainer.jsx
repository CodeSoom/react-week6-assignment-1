import React from 'react';

import Restaurant from './Restaurant';

export default function RestaurantContainer() {
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울 강남구',
    menuItems: [
      { id: 1, name: '비빔밥' },
      { id: 2, name: '짬뽕' },
    ],
  };

  return (
    <Restaurant restaurant={restaurant} />
  );
}
