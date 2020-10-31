import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderRestaurantPage(id) {
    return render((
      <RestaurantContainer restaurantId={id} />
    ));
  }

  context('with restaurant', () => {
    it('renders restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));

      const { container } = renderRestaurantPage(1);
      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent(/서울/);
      expect(container).toHaveTextContent(/탕수육/);
      expect(container).toHaveTextContent(/팔보채/);
    });
  });

  context('without restaurant', () => {
    it('renders restaurant info', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));
      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('로딩중...');
    });
  });
});
