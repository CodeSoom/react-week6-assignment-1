import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('restaurant', () => {
  it('renders the restaurant address and menu', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('탕수육');
    expect(container).toHaveTextContent('팔보채');
  });
});
