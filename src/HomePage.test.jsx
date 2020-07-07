import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('HomePage', () => {
  const { container } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('About');
});
