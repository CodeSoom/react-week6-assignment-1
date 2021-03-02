import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import RestaurantsDetailPage from './RestaurantsDetailPage';

test('RestaurantsDetailPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  render((
    <MemoryRouter>
      <RestaurantsDetailPage />
    </MemoryRouter>
  ));
});
