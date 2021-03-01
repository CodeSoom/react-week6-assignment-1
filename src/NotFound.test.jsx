import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders 404 Not Found', () => {
    const { getByRole } = render(
      <NotFound />,
    );

    expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
  });
});
