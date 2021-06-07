import { render } from '@testing-library/react';

import HomePage from '.';

describe('Home', () => {
  it('renders link list', () => {
    const { getByRole } = render(<HomePage />);

    expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Restaurants' })).toBeInTheDocument();
  });
});
