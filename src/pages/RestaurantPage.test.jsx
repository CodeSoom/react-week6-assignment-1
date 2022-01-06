import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();
  const renderRestaurantPage = () => render(<RestaurantPage />);

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => {

    });
  });

  it('레스토랑 상세 정보 thunk를 디스패치한다.', () => {
    renderRestaurantPage();

    expect(dispatch).toBeCalled();
  });
});
