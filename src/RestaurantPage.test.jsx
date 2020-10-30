import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const renderRestaurantPage = () => render(
    <RestaurantPage />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent('양천주가');
  });
});
