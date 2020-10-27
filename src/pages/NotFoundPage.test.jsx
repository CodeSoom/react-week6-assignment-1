import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('render home page', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    const { getByText } = screen;

    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
