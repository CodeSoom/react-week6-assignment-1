import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import RESTAURANT_DETAIL from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  function renderRestaurantDetail() {
    return render((<RestaurantDetail />));
  }

  context('레스토랑 상세정보가 있을 경우', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: RESTAURANT_DETAIL,
      }));
    });

    it('레스토랑 정보와 메뉴 목록을 볼 수 있다.', () => {
      const { getByText } = renderRestaurantDetail();

      expect(dispatch).toBeCalled();

      expect(getByText('양천주가')).not.toBeNull();
      expect(getByText('서울 강남구')).not.toBeNull();
    });
  });

  context('레스토랑 상세정보가 없을 경우', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: [],
      }));
    });

    it('아무것도 렌더링하지 않는다.', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('');
    });
  });
});
