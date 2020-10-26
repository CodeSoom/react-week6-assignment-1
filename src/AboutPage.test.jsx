import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { container } = render((
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('이 페이지는 소개 페이지 입니다.');
});
