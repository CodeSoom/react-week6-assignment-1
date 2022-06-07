import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantInfoContainer from './RestaurantInfoContainer';

import RESTAURANTINFO from '../fixtures/restaurantInfo';

describe('RestaurantInfoContainer', () => {
  context('when restaurantInfoLoading is true', () => {
    it('renders restaurant information', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANTINFO,
        restaurantInfoLoading: true,
      }));

      const { container } = render((
        <RestaurantInfoContainer />
      ));

      expect(container).toHaveTextContent('양천주가');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('when restaurantInfoLoading is false', () => {
    it('returns Loading...', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: RESTAURANTINFO,
        restaurantInfoLoading: false,
      }));

      const { container } = render((
        <RestaurantInfoContainer />
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
