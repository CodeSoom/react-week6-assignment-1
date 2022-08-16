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

    it('renders regions', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('서울')).not.toBeNull();
    });

    it('renders categories', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한식')).not.toBeNull();
    });

    it('renders restaurants', () => {
      const { queryByText } = customRender('/restaurants');

      expect(queryByText('한국식 초밥')).not.toBeNull();
    });
  });
});
