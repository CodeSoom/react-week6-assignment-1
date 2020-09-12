import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurants';

jest.mock('react-redux');

describe('restaurantDetail', () => {
  context('with restaurant', () => {
    it('renders restarant detail', () => {
      const firstRestaurants = restaurant[0];

      const { container } = render(<RestaurantDetail restaurant={firstRestaurants} />);

      expect(container).toHaveTextContent(firstRestaurants.name);
      expect(container).toHaveTextContent(firstRestaurants.address);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[0].name);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[1].name);
    });
  });

  context('without restaurant', () => {
    it('renders empty message', () => {
      const { getByText } = render(<RestaurantDetail />);

      expect(getByText(/레스토랑을 불러오는 중이거나 없습니다./)).not.toBeNull();
    });
  });
});
