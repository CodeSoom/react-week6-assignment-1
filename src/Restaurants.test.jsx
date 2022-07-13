import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import restaurants from '../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render((
    <MemoryRouter>
      <Restaurants
        restaurants={restaurants}
      />
    </MemoryRouter>
  ));

  it('renders each restaurant name as a link', () => {
    const { getByRole } = renderRestaurants();

    restaurants.forEach(
      ({ id, name }) => {
        expect(getByRole('link', { name })).toHaveAttribute('href', `/${id}`);
      },
    );
  });
});
