import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

function renderHomePage() {
  return render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
}

describe('HomePage', () => {
  it('renders the home page', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('shows links', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('About');
  });
});
