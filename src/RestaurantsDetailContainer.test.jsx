import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import given from 'given2';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantsDetailContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: given.restaurantDetail,
    }));
  });

  context('without restaurants detail', () => {
    given('restaurantDetail', () => null);

    it('renders "로딩중..."', () => {
      const { queryByText } = render((
        <RestaurantsDetailContainer />
      ));

      expect(queryByText('로딩중..')).not.toBeNull();
    });
  });

  context('with restaurants detail', () => {
    given('restaurantDetail', () => RESTAURANTDETAIL);

    it('renders restaurents detail', () => {
      const { queryByText } = render((
        <RestaurantsDetailContainer />
      ));

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('서울 강남구 123456')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });
});
