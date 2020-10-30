import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const renderRestaurantContainer = () => render(
    <RestaurantContainer />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent(/서울 강남구/);
  });
});
