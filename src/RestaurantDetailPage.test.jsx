import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  given('restaurant', () => ({
    restaurant: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
      menuItems: given.menuItems,
    }
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      ...given.restaurant,
    }));
  });

  const match = {
    params: {
      restaurantId: 1,
    },
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  function renderRestaurant() {
    return render((
      <RestaurantDetailPage match={match} />
    ));
  }

  it('calls dispatch()', () => {
    given('menuItems', () => [{ id: 1, restaurantId: 1, name: '비빔밥' }]);

    renderRestaurant();

    expect(dispatch).toBeCalled();
  });

  context('with menu', () => {
    beforeEach(() => {
      given('menuItems', () => [{ id: 1, restaurantId: 1, name: '비빔밥' }]);
    });

    it('renders restaurant', () => {
      const { queryByText } = renderRestaurant();

      expect(queryByText(/서울 강남구/)).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });

  context('without menu', () => {
    beforeEach(() => {
      given('menuItems', () => [])
    });

    it('renders restaurant', () => {
      const { queryByText } = renderRestaurant();

      expect(queryByText(/서울 강남구/)).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('메뉴가 존재하지 않습니다.')).not.toBeNull();
    });
  });
});
