import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { container } = render(<HomePage />);

  expect(container).toHaveTextContent('Home');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
});
