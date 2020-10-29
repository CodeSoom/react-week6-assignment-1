import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';
import restaurant from '../../fixtures/restaurant';

describe('RestaurantContainer', () => {
  context('with restaurant info', () => {
    it('renders restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      render(<RestaurantContainer />);

      expect(screen.getByText(restaurant.name)).toBeInTheDocument();
      expect(screen.getByText(restaurant.address)).toBeInTheDocument();
    });
  });
});
