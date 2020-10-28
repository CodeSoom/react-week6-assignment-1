import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('show restaurant detail', () => {
    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('About');
    expect(container).toHaveTextContent('About 페이지 입니다.');
  });
});
