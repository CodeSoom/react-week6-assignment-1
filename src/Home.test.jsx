import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('<Home />', () => {
  it('renders about and restaurants link', () => {
    const { getByText } = render(<Home />);

    expect(getByText('about')).toBeInTheDocument();
    expect(getByText('restaurants')).toBeInTheDocument();
  });
});
