import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울 강남구',
    menuItems: [
      { id: 1, name: '비빔밥' },
      { id: 2, name: '짬뽕' },
    ],
  };

  const renderRestaurant = () => render(
    <Restaurant restaurant={restaurant} />,
  );

  it('renders restaurant detail information', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
