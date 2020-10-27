import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import RestaurantInfoContainer from './RestaurantInfoContainer';
import RESTAURANT_INFO from '../../fixtures/restaurantInfo';

describe('RestaurantInfoContainer', () => {
  context('with restaurant info', () => {
    it('renders restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          info: RESTAURANT_INFO,
        },
      }));

      render(<RestaurantInfoContainer />);

      expect(screen.getByText(RESTAURANT_INFO.name)).toBeInTheDocument();
    });
  });
});
