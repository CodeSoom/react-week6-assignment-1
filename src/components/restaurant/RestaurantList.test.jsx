import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantList from './RestaurantList';
import RESTAURANTS from '../../../fixtures/restaurants';

describe('RestaurantList', () => {
  const restaurantListRender = (restaurants) => render((
    <MemoryRouter>
      <RestaurantList
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  context('with restaurants', () => {
    it('see renders restaurants', () => {
      const { container } = restaurantListRender(RESTAURANTS);

      RESTAURANTS.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('without restaurants', () => {
    const restaurants = [];

    it('nothing render restaurants', () => {
      const { container } = restaurantListRender(restaurants);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
