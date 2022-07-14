import { render } from '@testing-library/react';

import RESTAURANT from '../../../../fixtures/restaurant';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const renderRestaurant = () => render((
    <Restaurant
      restaurant={RESTAURANT}
    />
  ));

  it('renders the restaurant name', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(RESTAURANT.name);
  });

  it('renders the restaurant address', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(RESTAURANT.address);
  });

  it('renders the restaurant menus', () => {
    const { container } = renderRestaurant();

    RESTAURANT.menus.forEach(
      ({ name }) => expect(container).toHaveTextContent(name),
    );
  });
});
