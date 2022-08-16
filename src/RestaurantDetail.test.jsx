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
    it('renders invalid route view', () => {
      const { container } = render(<RestaurantDetail restaurant={{}} />);

      expect(container).toHaveTextContent('요청하신 정보를 찾을 수 없습니다.');
    });
  });
});
