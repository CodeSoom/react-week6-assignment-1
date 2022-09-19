import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const handleClick = jest.fn();

  it('renders links of restaurants', () => {
    const { getAllByRole } = render((
      <RestaurantsContainer onClickRestaurant={handleClick} />
    ));

    const restaurantLinks = getAllByRole('link');

    restaurantLinks.forEach((restaurantLink, index) => {
      expect(restaurantLink).toHaveTextContent(restaurants[index].name);
      expect(restaurantLink.href).toContain(`${restaurants[index].id}`);

      fireEvent.click(restaurantLink);
    });

    expect(handleClick).toBeCalledTimes(restaurantLinks.length);
  });
});
