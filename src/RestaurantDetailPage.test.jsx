import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('show restaurant detail', () => {
    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 12345');
  });
});
