import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantContainer from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  it('renders "메뉴" title', () => {
    const { getByRole } = render(<RestaurantContainer />);

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
  });

  it('renders address', () => {
    const { getByText } = render(<RestaurantContainer />);

    expect(getByText('주소: 양천주가 in 서울 강남구 123456')).toBeInTheDocument();
  });
  it('renders menus', () => {
    const { getByText } = render(<RestaurantContainer />);

    restaurant.menuItems.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
