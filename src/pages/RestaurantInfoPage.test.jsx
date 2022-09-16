import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

import { restaurantInfo as RESTAURANT_INFO } from '../../__fixtures__/restaurants';

describe('RestaurantInfoPage', () => {
  const dispatch = jest.fn();

  context('with restaurantInfo', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANT_INFO,
      }));
    });

    it('renders RestaurantInfoPage', () => {
      const { queryByText } = render((
        <RestaurantInfoPage />
      ));

      expect(dispatch).toBeCalled();

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('주소: 서울 강남구')).not.toBeNull();
    });
  });

  context('without restaurantInfo', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: undefined,
      }));
    });

    it('shows Loading...', () => {
      const { queryByText } = render((
        <RestaurantInfoPage />
      ));

      expect(dispatch).toBeCalled();

      expect(queryByText('Loading...')).not.toBeNull();
    });
  });
});
