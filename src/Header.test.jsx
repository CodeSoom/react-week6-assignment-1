import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  render((
    <Header />
  ));

  expect(screen.getByRole('link', { name: '헤더' })).toBeInTheDocument();
});
