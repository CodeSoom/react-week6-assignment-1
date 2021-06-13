import { render } from '@testing-library/react';

import Restaurants from '.';

import restaurants from '../../../fixtures/restaurants';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  it('renders restaurants', () => {
    const { getByRole } = render((
      <Restaurants
        restaurants={restaurants}
        onClickChangeRoute={handleClick}
      />
    ));

    restaurants.forEach(({ name }) => {
      expect(getByRole('link', { name })).toBeInTheDocument();
    });
  });
});
