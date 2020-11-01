import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  it('renders restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
      loading: false,
    }));

    const { container } = render(<RestaurantContainer />);

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.address);

    restaurant.menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });

  it('renders loading message', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
      loading: true,
    }));

    const { container } = render(<RestaurantContainer />);

    expect(container).toHaveTextContent(/Loading/);
  });
});
