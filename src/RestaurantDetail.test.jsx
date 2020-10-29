import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울 강남구',
    menuItems: [
      { id: 1, name: '비빔밥' },
      { id: 2, name: '짬뽕' },
    ],
  };

  const renderRestaurantDetail = () => render(
    <RestaurantDetail restaurant={restaurant} />,
  );

  it('renders restaurant detail information', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
