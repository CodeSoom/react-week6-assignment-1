import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.unmock('react-router-dom');

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

  it('shows links', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
