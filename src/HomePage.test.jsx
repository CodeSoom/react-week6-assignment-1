import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('초기화면 렌더링', () => {
    const { getByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(getByText('About')).toHaveAttribute('href', '/about');
    expect(getByText('Restaurants')).toHaveAttribute('href', '/restaurants');
  });
});
