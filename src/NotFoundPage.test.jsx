import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('초기화면 로딩', () => {
    render((
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    ));
  });
});
