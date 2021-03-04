import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurant from '../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  context('with restaurant detail', () => {
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
