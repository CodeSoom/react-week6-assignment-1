import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('<Home />', () => {
  const renderHome = () => render(<Home />);

  it('renders heading home', () => {
    // When
    const { getByRole } = renderHome();

    // Then
    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('renders about and restaurants link', () => {
    // When
    const { getByText } = renderHome();

    // Then
    expect(getByText('about')).toBeInTheDocument();
    expect(getByText('restaurants')).toBeInTheDocument();
  });
});
