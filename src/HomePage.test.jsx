import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('내용을 표시합니다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(queryByText(/Home/)).not.toBeNull();
    expect(queryByText(/About/)).not.toBeNull();
    expect(queryByText(/Restaurants/)).not.toBeNull();
  });

  it('알맞은 path에 연결합니다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(queryByText(/About/).getAttribute('href')).toBe('/about');
    expect(queryByText(/Restaurants/).getAttribute('href')).toBe('/restaurants');
  });
});
