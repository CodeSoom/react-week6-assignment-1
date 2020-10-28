import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import RESTAURANT_DETAIL from '../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  context('with selectedRestaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedRestaurant: RESTAURANT_DETAIL,
      }));
    });

    it('renders restaurant Detail', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent(RESTAURANT_DETAIL.name);
    });
  });

  context('without selectedRestaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        selectedRestaurant: null,
      }));
    });

    it('renders loading...', () => {
      const { container } = render((
        <MemoryRouter>
          <RestaurantDetailContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('로딩중...');
    });
  });
});
