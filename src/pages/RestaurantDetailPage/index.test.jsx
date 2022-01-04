import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from '.';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: '1',
      name: '김밥천국',
      menu: [],
    },
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('loads restaurant', () => {
    const { getByText } = render(<RestaurantDetailPage />);

    expect(dispatch).toBeCalled();

    expect(getByText('김밥천국')).toBeInTheDocument();
  });
});
