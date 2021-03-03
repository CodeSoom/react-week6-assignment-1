import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('내용을 표시합니다.', () => {
    const { queryByText } = render(<HomePage />);
    expect(queryByText(/Home/)).not.toBeNull();
    expect(queryByText(/About/)).not.toBeNull();
    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  it('알맞은 path에 연결합니다.', () => {
    const { queryByText } = render(<HomePage />);
    expect(queryByText(/About/).href).toBe('/about');
    expect(queryByText(/Restaurants/).href).toBe('/restaurants');
  });
});
