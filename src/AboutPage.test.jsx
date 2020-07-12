import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('초기화면 로딩', () => {
    render((
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    ));
  });
});
