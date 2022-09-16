import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('renders restaurant links', () => {
    const { getAllByRole } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    const restaurantLinks = getAllByRole('link');

    restaurantLinks.forEach((restaurantLink, index) => {
      expect(restaurantLink).toHaveTextContent(restaurants[index].name);
      expect(restaurantLink.href).toContain(`${restaurants[index].id}`);
    });
  });
});
