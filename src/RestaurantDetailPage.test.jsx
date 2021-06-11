import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import RESTAURANT_DETAIL from '../fixtures/restaurantDetail';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-redux');

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('renders RestaurantsPage and Not Found', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantDetailPage />
        </MemoryRouter>
      ));

      expect(queryByText('404 Not Found')).not.toBeNull();
    });
  });

  context('with restaurantDetail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: RESTAURANT_DETAIL,
      }));
    });

    it('renders restaurantDetail', () => {
      const { queryByText } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantDetailPage />
        </MemoryRouter>
      ));

      expect(queryByText('양천주가')).not.toBeNull();
    });
  });
});
