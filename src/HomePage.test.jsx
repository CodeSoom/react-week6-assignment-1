import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { container } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
});
