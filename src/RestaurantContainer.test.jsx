import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurant from '../fixtures/restaurant';

jest.mock('react-redux');

describe('<RestaurantContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant', () => {
    it('shows restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { container } = render(<RestaurantContainer restaurantId={1} />);

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울 강남구/i);
      expect(container).toHaveTextContent(/탕수육/i);
      expect(container).toHaveTextContent(/팔보채/i);
    });
  });

  context('without restaurant', () => {
    it('shows loading message', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));

      const { container } = render(<RestaurantContainer restaurantId={null} />);

      expect(container).toHaveTextContent('식당 정보를 불러오고 있습니다...');
    });
  });
});
