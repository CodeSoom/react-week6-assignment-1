import React from 'react';
import { render, screen } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';
import restaurant from '../../fixtures/restaurant';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      render(<RestaurantReviews reviews={restaurant.reviews} />);

      expect(screen.getByText('평가')).toBeInTheDocument();
      expect(screen.getByText(/훌륭하다 훌륭하다 지구인놈들/)).toBeInTheDocument();
    });
  });
});
