import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HeaderPage from './HeaderPage';

test('HeaderPage', () => {
  render(
    <MemoryRouter>
      <HeaderPage />,
    </MemoryRouter>
  );
});
