import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import HomePage from '.';

describe('HomePage', () => {
  it('renders links', () => {
    const { getByRole } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
  });
});
