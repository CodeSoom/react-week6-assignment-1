import React from 'react';

import HomePage from './HomePage';

import { render } from '@testing-library/react';

test('HomePage', () => {

  const { container } = render((
    <HomePage />
  ));
  expect(container).toHaveTextContent('Home');
});
