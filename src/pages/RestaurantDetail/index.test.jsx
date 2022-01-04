import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailPage from '.';

describe('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: '1',
      name: 'Restaurant 1',
      address: 'Address 1',
      menu: [{ id: 1, name: '치즈돈까스' }],
    },
  }));

  it('renders restaurant\'s name, address and menu', () => {
    const { getByText } = render(<RestaurantDetailPage />);

    expect(getByText('김밥천국')).toBeInTheDocument();
    expect(getByText('서울특별시 강남구 역삼동')).toBeInTheDocument();
    expect(getByText('치즈돈까스')).toBeInTheDocument();
  });
});
