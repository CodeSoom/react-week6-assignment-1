import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    resturant: RESTAURANT,
  }));

  const { } = render((
    <MemoryRouter>
      <RestaurantPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  // TODO: restaurant id 값 제대로 요청하는지 테스트
});
