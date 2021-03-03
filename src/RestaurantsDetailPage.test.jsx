import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsDetailPage from './RestaurantsDetailPage';

describe('RestaurantsDetailPage', () => {
  it('renders restaurants detail', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantsDetailPage />
      </MemoryRouter>
    ));

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('서울 강남구 123456')).not.toBeNull();
    expect(queryByText('메뉴')).not.toBeNull();
    expect(queryByText('비빔밥')).not.toBeNull();
  });
});
