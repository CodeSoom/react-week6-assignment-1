import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

test('HomePage', () => {
  const { container } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('Home');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');

  // TODO: 실질적으로 홈페이지가 가지는 네비게이션 기능을 테스트하려면?
});
