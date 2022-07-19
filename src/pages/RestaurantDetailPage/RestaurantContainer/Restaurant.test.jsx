import { render } from '@testing-library/react';

import { RESTAURANT } from '@fixtures';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const renderRestaurant = () => render((
    <Restaurant
      restaurant={RESTAURANT}
    />
  ));

  it('renders the restaurant info', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(RESTAURANT.name);
    expect(container).toHaveTextContent(RESTAURANT.address);
    RESTAURANT.menuItems.forEach(
      ({ name }) => expect(container).toHaveTextContent(name),
    );
  });
});
