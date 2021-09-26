import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders HomePage with menus', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Home');
    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
