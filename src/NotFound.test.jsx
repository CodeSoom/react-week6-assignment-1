import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './AboutPage';

test('AboutPage', () => {
  render((
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ));
});
