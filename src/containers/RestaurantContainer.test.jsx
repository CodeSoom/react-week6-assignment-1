import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  const renderRestaurantContainer = (id) => render(<RestaurantContainer restaurantId={id} />);

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {},
    }));
  });

  context('레스토랑 id가 숫자일 경우', () => {
    it('레스토랑 상세 정보 thunk를 디스패치한다.', () => {
      const id = 1;
      renderRestaurantContainer(id);

      expect(dispatch).toBeCalled();
    });
  });

  context('레스토랑 id가 숫자가 아닐 경우', () => {
    it('레스토랑 상세 정보 thunk를 디스패치한다.', () => {
      [null, undefined, '', 'hello'].forEach((notNumber) => {
        renderRestaurantContainer(notNumber);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
