import React from 'react';

import { render } from '@testing-library/react';

import RestaurantMenu from './RestaurantMenu';

test('RestaurantMenu', () => {
  const menu = [
    {
      id: 1,
      restaurantId: 1,
      name: '비빔밥',
    },
    {
      id: 2,
      restaurantId: 1,
      name: '짬뽕',
    },
    {
      id: 16,
      restaurantId: 1,
      name: '탕수육',
    },
    {
      id: 17,
      restaurantId: 1,
      name: '팔보채',
    },
  ];

  const { container } = render(<RestaurantMenu menu={menu} />);

  menu.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
