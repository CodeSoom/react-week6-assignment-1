import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders home page', () => {
    render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  });
});
