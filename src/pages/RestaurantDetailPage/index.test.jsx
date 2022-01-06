import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}));

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: '1',
      name: '김밥천국',
      menuItems: [],
    },
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('loads restaurant', () => {
    const { getByText } = render(<RestaurantDetailPage />);

    expect(dispatch).toBeCalled();

    expect(getByText('김밥천국')).toBeInTheDocument();
  });
});
