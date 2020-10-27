import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('"About" 리스트를 보여줍니다.', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('About');
  });

  it('"Restaurants" 리스트를 보여줍니다.', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
