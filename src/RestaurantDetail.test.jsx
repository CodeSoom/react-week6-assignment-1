import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

jest.mock('react-redux');

describe('<RestaurantDetail />', () => {
  context('with restaurant', () => {
    it('shows restaurant info', () => {
      const { container } = render(<RestaurantDetail restaurant={restaurant} />);

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울 강남구/i);
      expect(container).toHaveTextContent(/탕수육/i);
      expect(container).toHaveTextContent(/팔보채/i);
    });
  });

  // context('without restaurant', () => {
  //   it('shows loading message', () => {
  //     const { container } = render(<RestaurantDetail restaurant={restaurant} />);

  //     expect(container).toHaveTextContent('식당 정보를 불러오고 있습니다...');
  //   });
  // });
});
