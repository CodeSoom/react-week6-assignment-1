import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurant from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const useSelectorMockImplementation = (loading = false) => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
      loading,
    }));
  };

  context('without loading', () => {
    it('renders restaurant', () => {
      useSelectorMockImplementation();

      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent(restaurant.name);
      expect(container).toHaveTextContent(restaurant.address);

      restaurant.menuItems.forEach((menuItem) => {
        expect(container).toHaveTextContent(menuItem.name);
      });
    });
  });

  context('with loading', () => {
    it('renders loading message', () => {
      useSelectorMockImplementation(true);

      const { container } = render(<RestaurantContainer />);

      expect(container).toHaveTextContent(/Loading/);
    });
  });
});
