import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('show 404 not found', () => {
    const { container } = render((
      <NotFoundPage />
    ));
    expect(container).toHaveTextContent('404 Not Found');
  });
});
