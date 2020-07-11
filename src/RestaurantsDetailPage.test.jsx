import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsDetailPage from './RestaurantsDetailPage';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsDetailPage', () => {
  const firstRestaurants = restaurants[0];

  context('with restaurant', () => {
    it('renders details of restaurant', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurant: firstRestaurants,
      }));

      const { container } = render((
        <MemoryRouter initialEntries={['1']}>
          <RestaurantsDetailPage />
        </MemoryRouter>
      ));

      expect(dispatch).toBeCalled();
      expect(container).toHaveTextContent(firstRestaurants.name);
      expect(container).toHaveTextContent(firstRestaurants.address);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[0].name);
      expect(container).toHaveTextContent(firstRestaurants.menuItems[1].name);
    });
  });
});
