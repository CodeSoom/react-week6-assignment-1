import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  expect(screen.getByRole('link', { name: '헤더' })).toBeInTheDocument();
});
