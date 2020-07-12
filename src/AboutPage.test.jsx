import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('About페이지의 정보를 보여준다.', () => {
    const { getByText } = render((
      <AboutPage />
    ));

    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('About 페이지 입니다.')).toBeInTheDocument();
  });
});
