import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  const renderRestaurantContainer = () => render(
    <RestaurantContainer />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });
});
