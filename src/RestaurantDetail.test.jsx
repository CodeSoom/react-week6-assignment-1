import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  context('with restaurant', () => {
    it('renders restaurant details', () => {
      const { container } = render(<RestaurantDetail restaurant={RESTAURANT} />);

      expect(container).toHaveTextContent('밥');
    });
  });

  context('without restaurant', () => {
    it('renders 404 page', () => {
      const { container } = render(<RestaurantDetail restaurant={{}} />);

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
