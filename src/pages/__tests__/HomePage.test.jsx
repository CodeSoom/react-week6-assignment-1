import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders Home, About, Restaurants', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(getByRole('heading', { name: 'Home' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(getByRole('link', { name: 'Restaurants' })).toHaveAttribute('href', '/restaurants');
  });
});
