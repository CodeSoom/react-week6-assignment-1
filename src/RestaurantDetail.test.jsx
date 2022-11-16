import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: RESTAURANTDETAIL,
  }));

  function renderRestaurantDetail() {
    return render((<RestaurantDetail />));
  }

  it('RestaurantDetail을 렌더링한다.', () => {
    const { getByText } = renderRestaurantDetail();

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('서울시 강남구')).not.toBeNull();
  });
});
