import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '.';

describe('HomePage', () => {
  it('renders title and links', () => {
    const { getByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
