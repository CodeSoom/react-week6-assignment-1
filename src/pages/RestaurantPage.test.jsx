import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';
import RESTAURANT from '../../fixtures/restaurant';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();
  const renderRestaurantPage = () => render(<RestaurantPage />);

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {},
    }));
  });

  it('레스토랑 상세 정보 thunk를 디스패치한다.', () => {
    renderRestaurantPage();

    expect(dispatch).toBeCalled();
  });

  it('로딩 텍스트가 처음에 화면에 나타난다.', () => {
    const { getByText } = renderRestaurantPage();

    expect(getByText('Loading...')).not.toBeNull();
  });

  it('레스토랑 정보가 있으면, 화면에 나타난다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));

    const { getByText } = renderRestaurantPage();

    expect(getByText(RESTAURANT.name)).not.toBeNull();
    expect(getByText(RESTAURANT.menuItems[0].name)).not.toBeNull();
    expect(getByText(RESTAURANT.menuItems[1].name)).not.toBeNull();
  });
});
