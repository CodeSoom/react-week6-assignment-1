import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RetaurantPage', () => {
  it('renders restaurantPage', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('RestaurantPage');
  });
});
