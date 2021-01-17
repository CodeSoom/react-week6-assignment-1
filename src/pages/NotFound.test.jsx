import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './NotFound';

test('NotFound', () => {
  const { container } = render((
    <NotFound />
  ));

  expect(container).toHaveTextContent('404 Not Found');
});
