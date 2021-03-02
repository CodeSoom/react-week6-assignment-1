import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('renders Restaurant Detail Page', () => {
    const { container } = render(<RestaurantDetailPage />);

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울 강남구 강남대로94길 9');
    expect(container).toHaveTextContent('맛나는 거');
    expect(container).toHaveTextContent('짠 거');
  });
});
