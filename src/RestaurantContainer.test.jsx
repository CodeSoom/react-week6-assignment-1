import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

import restaurant from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  function renderRestaurantContainer() {
    return render((
      <MemoryRouter>
        <RestaurantContainer />
      </MemoryRouter>
    ));
  }

  context('when loading', () => {
    it('is false show restaurant page', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
        loading: false,
      }));

      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent(restaurant.name);
    });
    it('is true show loading page', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
        loading: true,
      }));

      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
