import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

describe('RestaurantList', () => {
  beforeAll(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        selectedRestaurants: [{ id: 1, name: '양천주가' }],
      },
    }));
  });

  it('renders list of matched restaurants', () => {
    const { container } = render(<RestaurantList />);

    expect(container).toHaveTextContent('양천주가');
  });
});
