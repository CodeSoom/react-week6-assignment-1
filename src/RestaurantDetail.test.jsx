import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울시 강남구',
    menus: [
      { id: 1, name: '탕수육' },
    ],
  };

  const renderRestaurantDetail = () => render((
    <RestaurantDetail restaurant={restaurant} />
  ));

  it('renders restaurant name and address', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent(/서울시 강남구/);
  });

  it('renders restaurant menu', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('탕수육');
  });
});
