import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home', () => {
  it('renders Home Page', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('Restaurants');
  });
});
