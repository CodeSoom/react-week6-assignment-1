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

  context('when restaurantInfo is null', () => {
    it('renders loading', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: null,
      }));

      const { container } = render((
        <RestaurantInfoContainer />
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
