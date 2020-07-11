import React from 'react';

import { render } from '@testing-library/react';

import LoadingPage from './LoadingPage';

describe('LoadingPage', () => {
  it('초기화면 로딩', () => {
    const { getByText } = render((
      <LoadingPage />
    ));

    expect(getByText(/Loading.../)).toBeInTheDocument();
  });
});
