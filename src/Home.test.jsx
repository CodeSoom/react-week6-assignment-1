import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('<Home />', () => {
  it('renders heading home', () => {
    // When
    const { getByRole } = render(<Home />);

    // Then
    expect(getByRole('heading')).toHaveTextContent('Home');
  });

  it('renders about and restaurants link', () => {
    // When
    const { getByText } = render(<Home />);

    // Then
    expect(getByText('about')).toBeInTheDocument();
    expect(getByText('restaurants')).toBeInTheDocument();
  });
});
