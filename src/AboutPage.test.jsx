import React from 'react';

import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  render((
    <AboutPage />
  ));

  expect(screen.getByText('About')).toBeInTheDocument();
});
