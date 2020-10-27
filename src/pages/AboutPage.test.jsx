import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('render home page', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    const { getByText } = screen;

    expect(getByText('About 페이지입니다.')).toBeInTheDocument();
  });
});
