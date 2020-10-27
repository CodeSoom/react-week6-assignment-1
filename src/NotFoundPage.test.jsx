import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('"페이지를 찾을 수 없습니다." 문구를 보여줍니다.', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('페이지를 찾을 수 없습니다.');
  });
});
