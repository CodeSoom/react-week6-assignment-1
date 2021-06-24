import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders', () => {
    const { getByText, queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(queryByText('Home')).not.toBeNull();
    expect(getByText('Home')).toContainHTML('h2');

    expect(queryByText('About')).not.toBeNull();
    expect(getByText('About').closest('a')).toContainHTML('a');
    expect(getByText('About').closest('a')).toHaveAttribute('href', '/about');

    expect(queryByText('Restaurants')).not.toBeNull();
    expect(getByText('Restaurants').closest('a')).toContainHTML('a');
    expect(getByText('Restaurants').closest('a')).toHaveAttribute('href', '/restaurants');
  });
});
