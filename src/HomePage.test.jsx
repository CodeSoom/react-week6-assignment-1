import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { queryByText } = render(<HomePage />);

  expect(queryByText(/Home/)).not.toBeNull();
});
