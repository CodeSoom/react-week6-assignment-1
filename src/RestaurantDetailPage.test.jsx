import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
  }));

  it('renders restaurant detail page', () => {
    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('Detail');
  });
});
