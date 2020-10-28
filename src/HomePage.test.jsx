import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('shows heading', () => {
    const { container } = render((
      <HomePage />
    ));

    expect(container).toHaveTextContent('Home');
  });
});
