import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { queryByText } = render((
    <NotFoundPage />
  ));

  expect(queryByText('존재하지 않는 페이지 입니다')).not.toBeNull();
});
