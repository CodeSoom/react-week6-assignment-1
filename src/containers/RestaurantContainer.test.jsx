import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      menus: [
        { id: 1, type: '탕수육' },
      ],
    },
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent('탕수육');
});
