import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsInfoContainer from './RestaurantsInfoContainer';

import restaurantInfo from '../fixtures/restaurantInfo';

describe('RestaurantsInfoContainer', () => {
  const renderRestaurantInfoContainer = () => render((
    <RestaurantsInfoContainer />
  ));

  context('레스토랑 데이터가 있을 시', () => {
    it('레스토랑 정보가 랜더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo,
      }));

      const { container } = renderRestaurantInfoContainer();

      expect(container).toHaveTextContent(/양천주가/);
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('레스토랑 데이터가 없을 시', () => {
    it('로딩 문구가 랜더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantInfo: null,
      }));

      const { container } = renderRestaurantInfoContainer();

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
