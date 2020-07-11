import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsDetailPage from './RestaurantsDetailPage';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsDetailPage', () => {
  const firstRestaurants = restaurants[0];

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: firstRestaurants,
      }));
    });

    it('renders details of restaurant', () => {
      // const { container } = render((
      //   <MemoryRouter initialEntries={['1']}>
      //     <RestaurantsDetailPage />
      //   </MemoryRouter>
      // ));

      // expect(container).toHaveTextContent(firstRestaurants.name);
      // expect(container).toHaveTextContent(firstRestaurants.address);
      // expect(container).toHaveTextContent(firstRestaurants.menuItems[0].name);
      // expect(container).toHaveTextContent(firstRestaurants.menuItems[1].name);
    });
  });
});
