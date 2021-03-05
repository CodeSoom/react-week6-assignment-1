import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders not found page', () => {
    const { container } = render((
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>

    ));

    expect(container).toHaveTextContent('404 Not Found');
  });
});
