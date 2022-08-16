import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './NotFound';

const customRender = () => render(<NotFound />);

describe('InvalidRoute', () => {
  it('shows description', () => {
    const { queryByText } = customRender();

    expect(queryByText('요청하신 정보를 찾을 수 없습니다.')).not.toBeNull();
  });
});
