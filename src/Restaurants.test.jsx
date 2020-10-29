import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const handleClickRestaurant = jest.fn();

  const restaurants = [
    { id: 1, name: '양천주가' },
    { id: 2, name: '마법사주방' },
  ];

  const renderRestaurants = () => render(
    <MemoryRouter>
      <Restaurants
        restaurants={restaurants}
        onClickRestaurant={handleClickRestaurant}
      />
    </MemoryRouter>,
  );

  it('render restaurants', () => {
    const { container } = renderRestaurants();

    restaurants.forEach((restaurant) => {
      expect(container).toHaveTextContent(restaurant.name);
    });
  });

  context('when restaurant button is clicked', () => {
    it('called handleClickRestaurant', () => {
      const { getByText } = renderRestaurants();

      restaurants.forEach((restaurant) => {
        fireEvent.click(getByText(restaurant.name));
      });

      expect(handleClickRestaurant).toBeCalledTimes(2);
    });
  });
});
