import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { RESTAURANTS } from '../../../../fixtures';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render((
    <MemoryRouter>
      <Restaurants
        restaurants={RESTAURANTS}
      />
    </MemoryRouter>
  ));

  it('renders each restaurant name as a link', () => {
    const { getByRole } = renderRestaurants();

    RESTAURANTS.forEach(
      ({ id, name }) => {
        expect(getByRole('link', { name })).toHaveAttribute('href', `/${id}`);
      },
    );
  });
});
