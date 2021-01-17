import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderRestaurantsContainer = () => render(
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurantsContainer();

    restaurants.forEach((restaurant) => {
      expect(container).toHaveTextContent(restaurant.name);
    });
  });

  context('when restaurant link is clicked', () => {
    it('dispatch selectRestaurant and loadRestaurant', () => {
      const { getByText } = renderRestaurantsContainer();

      restaurants.forEach((restaurant) => {
        fireEvent.click(getByText(restaurant.name));
      });

      expect(dispatch).toBeCalledTimes(restaurants.length);
    });
  });
});
