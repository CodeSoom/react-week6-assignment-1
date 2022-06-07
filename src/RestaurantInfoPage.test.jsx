import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantInfoPage from './RestaurantInfoPage';

import RESTAURANTINFO from '../fixtures/restaurantInfo';

describe('RestaurantInfoPage', () => {
  context('when restaurantInfoLoading is true', () => {
    it('renders restaurant information', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANTINFO,
        restaurantInfoLoading: true,
      }));

      const { container } = render((
        <RestaurantInfoPage match={{ params: { id: 1 } }} />
      ));

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('when restaurantInfoLoading is false', () => {
    it('returns Loading...', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANTINFO,
        restaurantInfoLoading: false,
      }));

      const { container } = render((
        <RestaurantInfoPage match={{ params: { id: 1 } }} />
      ));

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
