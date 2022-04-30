import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('renders name of restaurant', () => {
    const params = { restaurantId: '1' };

    const { container } = render(
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage params={params} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('레스토랑 1');
  });
});
