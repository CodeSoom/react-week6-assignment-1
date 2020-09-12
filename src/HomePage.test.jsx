import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(getByText('About')).not.toBeNull();
    expect(getByText('Restaurants')).not.toBeNull();
  });
});
