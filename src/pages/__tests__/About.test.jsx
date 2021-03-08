import React from 'react';

import { render } from '@testing-library/react';

import About from '../About';

describe('About', () => {
  it('renders heading and paragraph', () => {
    const { getByRole, getByText } = render(
      <About />,
    );

    expect(getByRole('heading', { name: 'About' })).toBeInTheDocument();
    expect(getByText('About 페이지 입니다')).toBeInTheDocument();
  });
});
