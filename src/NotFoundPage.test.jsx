import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('"404 Not Found" 문구를 보여줍니다.', () => {
    const { container } = render(<NotFoundPage />);

    expect(container).toHaveTextContent('404 Not Found');
  });
});
