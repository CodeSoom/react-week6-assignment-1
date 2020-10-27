import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANTS from '../fixtures/restaurants';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const restaurantId = 1;

  context('with restaurants', () => {
    it('renders Restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: RESTAURANTS,
      }));

      const { container } = render((
        <RestaurantContainer restaurantId={restaurantId} />
      ));

      expect(container).toHaveTextContent('서울시 강남구');
    });
  });

  context('without restaurants', () => {
    it('renders Loading', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const { container } = render((
        <RestaurantContainer restaurantId={restaurantId} />
      ));

      expect(container).toHaveTextContent('loading ...');
    });
  });
});
