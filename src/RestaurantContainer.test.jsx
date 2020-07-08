import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '레스토랑 이름',
      address: '레스토랑 주소',
      menuItems: [
        { id: 1, name: '메뉴 이름' },
      ],
    },
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent('레스토랑 이름');
  expect(container).toHaveTextContent('레스토랑 주소');
  expect(container).toHaveTextContent('메뉴 이름');
});
