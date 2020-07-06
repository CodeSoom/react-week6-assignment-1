import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('show home title and link list', () => {
    const { getByText } = render((
      <HomePage />
    ));

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
