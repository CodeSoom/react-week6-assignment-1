import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

const customRender = () => render((
  <MemoryRouter>
    <RestaurantsPage />
  </MemoryRouter>
));

describe('RestaurantsPage', () => {
  context('with path /restaurants', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
        categories: CATEGORIES,
        restaurants: RESTAURANTS,
      }));
    });

    it('shows regions', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('서울')).not.toBeNull();
    });

    it('shows categories', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한식')).not.toBeNull();
    });

    it('shows restaurants', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한국식 초밥')).not.toBeNull();
    });
  });
});
