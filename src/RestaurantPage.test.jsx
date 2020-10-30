import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  const renderRestaurantPage = () => render(
    <RestaurantPage />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });
});
