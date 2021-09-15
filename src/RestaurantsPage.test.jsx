import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

test('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
    restaurants: [{
      id: 1, name: '마법사주방',
    }],
  }));
  const { queryByText } = render((
    <MemoryRouter>
      <RestaurantsPage />
    </MemoryRouter>

  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
});
