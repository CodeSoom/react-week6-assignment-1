import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';
import RESTAURANT_DETAIL from '../../../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  const restaurantDetailRender = ({ restaurant }) => render((
    <RestaurantDetail
      restaurant={restaurant}
    />
  ));

  context('with restaurant', () => {
    it('renders restaurant', () => {
      const { getByText } = restaurantDetailRender({
        restaurant: RESTAURANT_DETAIL,
      });

      expect(getByText(RESTAURANT_DETAIL.name)).not.toBeNull();
    });
  });

  context('without restaurant', () => {
    const restaurant = null;

    it('render loading...', () => {
      const { container } = restaurantDetailRender({ restaurant });

      expect(container).toHaveTextContent('로딩중...');
    });
  });
});
