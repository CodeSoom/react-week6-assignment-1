import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  it('renders a link to the home', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('link')).toHaveTextContent('헤더');
  });
});
