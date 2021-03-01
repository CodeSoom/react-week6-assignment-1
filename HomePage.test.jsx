import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders Home Page', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
