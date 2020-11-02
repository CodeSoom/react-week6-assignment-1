import React from 'react';

import { render } from '@testing-library/react';

import About from './About';

describe('<About />', () => {
  it('renders title', () => {
    const { getByRole } = render(<About />);

    expect(getByRole('heading')).toHaveTextContent('About');
  });
});
