import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { queryByText } = render((
    <MemoryRouter initialEntries={['/about']}>
      <AboutPage />
    </MemoryRouter>
  ));

  expect(queryByText('About 페이지 입니다.')).not.toBeNull();
});
