import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import RESTAURANDETAIL from '../fixtures/restaurantDetail';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-redux');

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('renders RestaurantsPage and Not Found', () => {
      const { queryByText } = render((
        <MemoryRouter>
          <RestaurantDetailPage />
        </MemoryRouter>
      ));

      expect(queryByText('404 Not Found')).not.toBeNull();
    });
  });

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);

      mockFetch(RESTAURANDETAIL);
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: RESTAURANDETAIL,
      }));
    });
    it('renders restaurantDetail', () => {
      // Todo: ...
    });
  });
});
