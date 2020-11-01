import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFound', () => {
  const { getByText } = render(<NotFoundPage />);

  expect(getByText('404 Not Found')).not.toBeNull();
});
