import React from 'react';

import NotFound from './NotFound';

import { render } from '@testing-library/react';

test('NotFound', () => {

  const { container } = render((
    <NotFound />
  ));
  expect(container).toHaveTextContent('404 NotFound');
});
