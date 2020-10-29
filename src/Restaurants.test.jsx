import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const handleClickRestaurant = jest.fn();

  const restaurants = [
    { id: 1, name: '양천주가' },
    { id: 2, name: '마법사주방' },
  ];

  const renderRestaurants = () => render(
    <Restaurants
      restaurants={restaurants}
      onClickRestaurant={handleClickRestaurant}
    />,
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
