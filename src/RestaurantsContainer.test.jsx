import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RESTAURANTS from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: RESTAURANTS,
  }));

  const restaurant = RESTAURANTS[0];

  const handleClick = jest.fn();

  const { getByText } = render((
    <RestaurantsContainer onClickRestaurant={handleClick} />
  ));

  fireEvent.click(getByText(restaurant.name));

  expect(handleClick).toHaveBeenCalledWith(restaurant);
});
