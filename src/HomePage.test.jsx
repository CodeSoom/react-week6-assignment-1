import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the home page', () => {
    render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  });
});
