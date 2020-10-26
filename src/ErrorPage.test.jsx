import React from 'react';

import { render } from '@testing-library/react';

import ErrorPage from './ErrorPage';

test('ErrorPage', () => {
  const { queryByText } = render((
    <ErrorPage />
  ));

  expect(queryByText('존재하지 않는 페이지 입니다')).not.toBeNull();
});
