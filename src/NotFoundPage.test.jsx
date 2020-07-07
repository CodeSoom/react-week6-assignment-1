import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('찾을 수 없는 페이지임을 보여준다.', () => {
    const { getByText } = render((
      <NotFoundPage />
    ));

    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
