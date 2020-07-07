import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('<RestaurantPage />', () => {
  it('shows header and page name', () => {
    const { container } = render(<RestaurantPage />);
    expect(container).toHaveTextContent('헤더');
    expect(container).toHaveTextContent('Restaurant');
  });

  it('shows restaurant info', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울시 강남구');
    expect(container).toHaveTextContent('탕수육');
    expect(container).toHaveTextContent('팔보채');
  });
});
