import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  function mockUseSelector(restaurant) {
    return useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  }

  const match = { params: { restaurantId: RESTAURANT.id } };

  function renderRestaurantPage() {
    return render((
      <MemoryRouter>
        <RestaurantPage match={match} />
      </MemoryRouter>
    ));
  }

  context('with restaurant', () => {
    const restaurant = RESTAURANT;

    it('renders RestaurantDetail', () => {
      mockUseSelector(restaurant);

      const { container } = renderRestaurantPage();

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent(RESTAURANT.name);

      RESTAURANT.menuItems.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('without restaurant', () => {
    const restaurant = [];

    it('renders Loading', () => {
      mockUseSelector(restaurant);

      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('loading ...');
    });
  });
});
