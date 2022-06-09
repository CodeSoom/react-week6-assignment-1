import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  context('with details', () => {
    const { container } = render(<RestaurantDetail />);

    expect(container).toHaveTextContent('탕수육');
  });
});
