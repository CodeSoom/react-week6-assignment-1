import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalledTimes(1);

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('서울 강남구 123456');
});
