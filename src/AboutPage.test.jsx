import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('"About 페이지 입니다." 문구를 보여줍니다.', () => {
    const { container } = render(<AboutPage />);

    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
