import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

describe('RetaurantPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  it('renders restaurant name', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('성전떡볶이');
  });
});
