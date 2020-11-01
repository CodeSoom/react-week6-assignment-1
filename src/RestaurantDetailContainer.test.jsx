import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantDetailContainer', () => {
  context('with load selected restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: RESTAURANT,
      }));
    });

    it('renders restaurant with selected restaurant', () => {
      const { container } = render(
        <RestaurantDetailContainer />,
      );

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('서울 강남구 123456');
    });
  });
});
