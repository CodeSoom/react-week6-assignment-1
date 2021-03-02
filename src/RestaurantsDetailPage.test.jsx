import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailPage from './RestaurantsDetailPage';

import restaurants from '../fixtures/restaurantDetail';

describe('RestaurantsDetailPage', () => {
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
          <RestaurantsDetailPage />
        </MemoryRouter>
      ));

      expect(dispatch).toBeCalled();
    });
  });
});
