import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsInfoPage from './RestaurantsInfoPage';

import RESTAURANTSINFO from '../fixtures/restaurantInfo';

jest.mock('react-redux');

describe('RestaurantsInfoPage', () => {
  const dispatch = jest.fn();

  function renderRestaurantInfo() {
    return render((<RestaurantsInfoPage />));
  }

  context('레스토랑 정보가 있을 경우', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANTSINFO,
      }));
    });

    it('레스토랑의 정보와 메뉴 목록을 볼 수 있다.', () => {
      const { getByText } = renderRestaurantInfo();

      expect(dispatch).toBeCalled();

      expect(getByText('양천주가')).not.toBeNull();
      expect(getByText('서울 강남구')).not.toBeNull();
    });
  });

  context('레스토랑 정보가 없을 경우', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: null,
      }));
    });

    it('로딩 문구가 랜더링된다.', () => {
      const { container } = renderRestaurantInfo();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
