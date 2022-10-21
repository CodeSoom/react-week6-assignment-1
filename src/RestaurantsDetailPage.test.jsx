import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsDetailPage from './RestaurantsDetailPage';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
  }));

  it('renders restaurant detail page', () => {
    const { container } = render((
      <RestaurantsDetailPage />
    ));

    expect(container).toHaveTextContent('Detail');
  });
});
