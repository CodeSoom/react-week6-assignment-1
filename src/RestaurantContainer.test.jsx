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

  context('when loading is done', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
        loading: false,
      }));
    });

    it('renders restaurant', () => {
      const { container } = renderRestaurantContainer();
      expect(container).toHaveTextContent(restaurant.name);
    });
  });

  context('when is loading', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
        loading: true,
      }));
    });

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();
      expect(container).toHaveTextContent('Loading...');
    });
  });
});
