import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  render((
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  ));
});
