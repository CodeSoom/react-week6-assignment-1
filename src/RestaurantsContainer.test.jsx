import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const handleClick = jest.fn();

  const { container } = render((
    <RestaurantsContainer onClickRestaurant={handleClick} />
  ));

  expect(container).toHaveTextContent('마법사주방');
});
