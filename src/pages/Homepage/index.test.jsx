import { render } from '@testing-library/react';

import HomePage from '.';

describe('Home', () => {
  it('renders link list', () => {
    const { getByRole } = render(<HomePage />);

    getByRole('link', { name: 'About' });
    getByRole('link', { name: 'Restaurants' });
  });
});
