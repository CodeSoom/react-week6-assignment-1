import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('shows heading', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('shows about link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
  });
});
