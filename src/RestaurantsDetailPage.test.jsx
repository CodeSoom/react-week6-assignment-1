import React from 'react';

import { render } from '@testing-library/react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsDetailPage from './RestaurantsDetailPage';

import restaurants from '../fixtures/restaurantDetail';

describe('RestaurantsDetailPage', () => {
  context('with restaurant detail', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: restaurants,
      }));
    });

    it('renders detail with restaurant detail', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantsDetailPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('서울 강남구');
      expect(container).toHaveTextContent('짬뽕');
    });
  });
});
