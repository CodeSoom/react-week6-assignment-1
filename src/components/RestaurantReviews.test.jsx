import React from 'react';
import { render } from '@testing-library/react';

import RestaurantReviews from './RestaurantReviews';
import restaurant from '../../fixtures/restaurant';

describe('RestaurantReviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const { container } = render(<RestaurantReviews reviews={restaurant.reviews} />);

      const items = container.querySelectorAll('li');

      items.forEach(({ textContent }, i) => {
        const { name, description, score } = restaurant.reviews[i];

        expect(textContent.includes(name)).toBe(true);
        expect(textContent.includes(description)).toBe(true);
        expect(textContent.includes(`${'★'.repeat(score)}${'☆'.repeat(5 - score)}`)).toBe(true);
      });
    });
  });
});
