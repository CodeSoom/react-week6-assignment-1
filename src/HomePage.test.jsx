import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the home page', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
    expect(container).toHaveTextContent('Home');
  });
  it('shows links', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('About');
  });
});
