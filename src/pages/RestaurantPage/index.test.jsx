import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailPage from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantsDetailPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  it('renders "메뉴" title', () => {
    const { getByRole } = render(<RestaurantDetailPage />);

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
  });
});
