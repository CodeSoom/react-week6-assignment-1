import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders NotFoundPage', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(getByText('이 페이지는 없는 페이지입니다')).not.toBeNull();
  });
});
