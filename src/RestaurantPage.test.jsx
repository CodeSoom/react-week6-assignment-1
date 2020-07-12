import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import restaurant from '../fixtures/restaurant';

describe('<RestaurantPage />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('shows page name', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { container } = render(<RestaurantPage params={{ restaurantId: 1 }} />);

    expect(container).toHaveTextContent('Restaurant');
  });

  context('with restaurant', () => {
    it('shows restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { container } = render(<RestaurantPage params={{ restaurantId: 1 }} />);

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('Restaurant1');
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

      const { container } = render(<RestaurantPage params={{ restaurantId: null }} />);

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('식당 정보를 불러오고 있습니다...');
    });
  });
});
