import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

test('Home', () => {
  const { container, getByText } = render((
    <Home />
  ));

  expect(getByText('Home')).not.toBeNull();
  expect(container).toHaveTextContent('Home');
});
