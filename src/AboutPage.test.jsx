import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { queryByText } = render((
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  ));

  expect(queryByText('About')).not.toBeNull();
});
