import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('show restaurant detail', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 12345');
  });
});
