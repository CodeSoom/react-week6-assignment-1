import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT_INFO from '../fixtures/restaurantInfo';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderRestaurantDetail = (restaurantInfo) => render((
    <RestaurantDetail restaurantInfo={restaurantInfo} />
  ));

  it('레스토랑 정보가 랜더링된다', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantInfo: RESTAURANT_INFO,
    }));

    const { queryByText } = renderRestaurantDetail(RESTAURANT_INFO);

    expect(queryByText(/양천주가/)).not.toBeNull();
    expect(queryByText(/서울시 강남구/)).not.toBeNull();
  });
});
