import React from 'react';

import HomePage from './HomePage';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('HomePage', () => {

  const { container } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
  expect(container).toHaveTextContent('Home');
});
