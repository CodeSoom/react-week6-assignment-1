import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('shows Home with other links to pages', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(queryByText('Home')).not.toBeNull();
    expect(queryByText('About')).not.toBeNull();
    expect(queryByText('Restaurants')).not.toBeNull();
  });
});
