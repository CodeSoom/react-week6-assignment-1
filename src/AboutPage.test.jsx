import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('제목과 내용을 보여준다.', () => {
    const { queryByText } = render(<AboutPage />);

    expect(queryByText('About')).toBeInTheDocument();
    expect(queryByText('About 페이지 입니다.')).toBeInTheDocument();
  });
});
