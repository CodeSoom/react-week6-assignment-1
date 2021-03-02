import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders text', () => {
    const { container } = render((
      <NotFoundPage />
    ));

    expect(container).toHaveTextContent('Not Found');
  });
});
