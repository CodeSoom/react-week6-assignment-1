import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RESTAURANTS from '../fixtures/restaurants';
import RESTAURANT from '../fixtures/restaurant';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant', () => {
    it('renders RestaurantDetail', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: RESTAURANTS,
        restaurant: RESTAURANT,
      }));

      const match = { params: { restaurantId: '1' } };

      const { container } = render((
        <MemoryRouter>
          <RestaurantPage match={match} />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('김밥제국');

      // New test
      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent(RESTAURANT.name);

      RESTAURANT.menuItems.forEach((menuItem) => {
        expect(container).toHaveTextContent(menuItem.name);
      });
    });
  });

  context('without restaurant', () => {
    it('renders Loading', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: RESTAURANTS,
        restaurant: [],
      }));

      const match = { params: { restaurantId: '1' } };

      const { container } = render((
        <MemoryRouter>
          <RestaurantPage match={match} />
        </MemoryRouter>
      ));

      // New test
      expect(container).toHaveTextContent('loading ...');
    });
  });
});
