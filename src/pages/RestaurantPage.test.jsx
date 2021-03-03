import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('renders restaurant title', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('양천주가');
  });

  it('renders restaurant adress', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent(/서울시 강남구/);
  });

  it('renders restaurant menu', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('탕수육');
  });
});
