import { render } from '@testing-library/react';

describe('RestaurantDetail', () => {
  context('with details', () => {
    const { container } = render(<RestaurantDetail />);

    expect(container).toHaveContent('탕수육');
  });
});
