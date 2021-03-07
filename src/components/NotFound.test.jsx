import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('Not Found를 표시합니다.', () => {
    const { queryByText } = render(<NotFound />);

    expect(queryByText(/404 Not Found/)).not.toBeNull();
  });
});
