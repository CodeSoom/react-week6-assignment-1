import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurants from '../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant detail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: restaurants,
      }));
    });

    it('renders detail with restaurant detail', () => {
      render((
        <MemoryRouter>
          <RestaurantDetailPage />
        </MemoryRouter>
      ));

      expect(dispatch).toBeCalled();
    });
  });
});
