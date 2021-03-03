import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import given from 'given2';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantDetail() {
    return render((
      <MemoryRouter>
        <RestaurantDetailContainer />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: given.restaurantDetail,
    }));
  });

  context('without restaurants detail', () => {
    given('restaurantDetail', () => null);

    it('renders "로딩중..."', () => {
      const { queryByText } = renderRestaurantDetail();

      expect(queryByText('로딩중..')).not.toBeNull();
    });
  });

  context('with restaurants detail', () => {
    given('restaurantDetail', () => RESTAURANTDETAIL);

    it('renders restaurents detail', () => {
      const { queryByText } = renderRestaurantDetail();

      expect(dispatch).toBeCalled();

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('서울 강남구 123456')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });
});
