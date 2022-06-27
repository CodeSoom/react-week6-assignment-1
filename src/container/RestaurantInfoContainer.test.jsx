import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';
import restaurant from '../../fixtures/restaurantInfo';

test('RestaurantInfoContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  const { container } = render(<RestaurantInfoContainer />);

  expect(container).toHaveTextContent('양천주가');
});
