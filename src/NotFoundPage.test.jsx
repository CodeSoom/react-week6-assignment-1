import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { queryByText } = render((
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ));

  expect(queryByText(/Not/)).not.toBeNull();
});
