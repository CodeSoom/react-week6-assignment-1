import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  const { container } = render(<Header />);

  expect(container).toHaveTextContent(/헤더/);
});
