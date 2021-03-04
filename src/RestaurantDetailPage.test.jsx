import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

import restaurantDetail from '../fixtures/restaurantDetail'

test('RestaurantDetailPage', () => {
  const { container } = render((
    <RestaurantDetailPage restaurantDetail={restaurantDetail}/>
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('주소: 서울 강남구');
  expect(container).toHaveTextContent('비빔밥');
  expect(container).toHaveTextContent('육개장');
});
