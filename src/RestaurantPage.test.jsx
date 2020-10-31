import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import restaurant from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  context('with restaurant', () => {
    it('renders restaurant info', () => {
      const { container } = render(<RestaurantPage params={{ id: 1 }} />);

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울/);
      expect(container).toHaveTextContent(/탕수육/);
      expect(container).toHaveTextContent(/팔보채/);
    });
  });
});
