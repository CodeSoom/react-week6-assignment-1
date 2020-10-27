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
      expect(screen.getByText(RESTAURANT_INFO.address)).toBeInTheDocument();

      const menuWrapper = screen.getByTestId('menu');

      RESTAURANT_INFO.menuItems.forEach((item) => {
        const itemId = menuWrapper.children[item.id - 1].textContent;

        expect(itemId).toBe(item.name);
      });

      RESTAURANT_INFO.reviews.forEach((review) => {
        const wrapper = screen.getByTestId(review.id);

        expect(wrapper.querySelector('.name').textContent).toBe(review.name);
        expect(wrapper.querySelector('.score').textContent).toBe(review.score);
        expect(wrapper.querySelector('.description').textContent).toBe(review.description);
      });
    });
  });
});
