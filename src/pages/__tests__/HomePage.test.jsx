import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from '../HomePage';

describe('HomePage', () => {
  it('Home이라는 제목과 목록을 보여준다.', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText('About')).toBeInTheDocument();
    expect(queryByText('Restaurants')).toBeInTheDocument();
  });

  it('목록들은 올바른 pathName에 연결되어 있다.', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(queryByText('About').getAttribute('href')).toBe('/about');
    expect(queryByText('Restaurants').getAttribute('href')).toBe('/restaurants');
  });
});
