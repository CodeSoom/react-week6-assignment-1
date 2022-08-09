import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANT from '../fixtures/restaurant';

describe('Restaurant', () => {
  context('with restaurant', () => {
    it('renders restaurant details', () => {
      const { container } = render(<Restaurant restaurant={RESTAURANT} />);

      expect(container).toHaveTextContent('밥');
    });
  });

  context('without restaurant', () => {
    it('renders 404 page', () => {
      const { container } = render(<Restaurant restaurant={{}} />);

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
