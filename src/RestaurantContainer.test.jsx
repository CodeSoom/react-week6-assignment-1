import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent(/서울시/);
  expect(container).toHaveTextContent(/탕수육/);
  expect(container).toHaveTextContent(/팔보채/);
});
