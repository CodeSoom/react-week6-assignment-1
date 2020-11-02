import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Home from './Home';

describe('<Home />', () => {
  const renderHome = () => render((
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ));

  it('renders heading home', () => {
    // When
    const { getByRole } = renderHome();

    // Then
    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('renders About and Restaurants link', () => {
    // When
    const { getByText } = renderHome();

    // Then
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
