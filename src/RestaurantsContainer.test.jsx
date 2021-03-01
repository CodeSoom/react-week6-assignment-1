import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  BrowserRouter,
} from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container } = render((
    <BrowserRouter>
      <RestaurantsContainer />
    </BrowserRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');
});
