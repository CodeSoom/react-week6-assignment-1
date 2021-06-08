import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import HomePage from '.';

describe('Home', () => {
  it('renders link list', () => {
    const { getByRole } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
  });
});
