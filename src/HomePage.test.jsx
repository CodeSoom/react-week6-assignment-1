import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { queryByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(queryByText('Home')).not.toBeNull();
});
