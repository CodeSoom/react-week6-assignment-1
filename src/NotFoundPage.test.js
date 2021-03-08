import React from 'react';

import NotFoundPage from './NotFoundPage';

import { render } from '@testing-library/react';

test('NotFoundPage', () => {

  const { container } = render((
    <NotFoundPage />
  ));
  expect(container).toHaveTextContent('404 NotFound');
});
