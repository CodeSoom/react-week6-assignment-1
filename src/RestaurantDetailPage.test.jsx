import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  it('renders', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
        ],
      },
    }));

    const { getByText } = render((
      <RestaurantDetailPage />
    ));

    expect(getByText(/서울 강남구/)).not.toBeNull();
    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('비빔밥')).not.toBeNull();

    expect(dispatch).toBeCalled();
  });
});
